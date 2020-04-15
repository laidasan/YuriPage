function funparabola(element,target,options) {
    let defult = {
        // speed為每偵移動像素大小，對於大部分螢幕而言，基本上 1秒60偵(60Hz) 換算下來即是 每一偵16毫秒~17毫秒
        speed: 16.67,
        //curvature 為曲率 可以理解成 y = a * x * x + b * x +  c 的 a，正數開口向下，數值越大，開頭越小，弧度越高 
        curvature: 0.001,
        progess: function(){return this},
        complete: function(){return this}
    }

    let params = {},option = options || {}
    
    Object.keys(defult).forEach(key => {
        params[key] = option[key] || defult[key]
    })

    let exports = {
        position: function() {return this},
        move: function() {return this},
        init: function() {return this}
    }
    let a = params.curvature , b = 0 ,c = 0
    let isFlagMove = false

    if(element && target && element.nodeType === 1 && target.nodeType === 1) {
        let centerElement = {} , centerTarget = {}
        let coordElement = {} , coordTarget = {}

        exports.position = function() {
            let {scrollLeft,scrollTop} = document.documentElement.scrollLeft ? document.documentElement : document.body

            //初始化位置
            element.style.setProperty('transform','translate(0,0)')

            let {left:elementRectLeft,top:elementRectTop,right:elementRectRight,bottom:elementRectBottom} = element.getBoundingClientRect()
            let {left:targetRectLeft,top:targetRectTop,right:targetRectRight,bottom:targetRectBottom} = target.getBoundingClientRect()

            //絕對位置
            centerElement = {
                x : elementRectLeft + (elementRectRight - elementRectLeft) / 2 + scrollLeft,
                y : elementRectTop + (elementRectBottom - elementRectTop) / 2 + scrollTop
            }

            centerTarget = {
                x : targetRectLeft + (targetRectRight - targetRectLeft) / 2 + scrollLeft,
                y : targetRectTop + (targetRectBottom - targetRectTop) / 2 + scrollTop
            }

            //相對位置
            coordElement = {
                x : 0,
                y : 0
            }

            coordTarget = {
                x : -(centerElement.x - centerTarget.x),
                y : -(centerElement.y - centerTarget.y),
            }

            // y = a * x * x + b * x +  c  => 經過(0,0) 所以 c = 0
            // y = a * x * x + b * x => b = (y - a * x * x) / x
            b = (coordTarget.y - a * coordTarget.x * coordTarget .x) / coordTarget.x
            
            return this
        }
    
    
    
         exports.move = function() {
            if(isFlagMove) return this

            let startx = 0, rate = coordTarget.x > 0 ? 1 : -1

            function step() {
                // 切线 y'=2ax+b
                var tangent = 2 * a * startx + b; // = y / x
                
				// y*y + x*x = speed
				// (tangent * x)^2 + x*x = speed
                // x = Math.sqr(speed / (tangent * tangent + 1));

                //上面這個算法會用到切線公式、畢氏定理(a * a + b * b = c * c)
                // tangent = 2 * a * x * x + b = y => tangent = 2a = y / x
                // 在運用畢氏定理 a平方 加 b 平方 = c平方 => x * x + y * y = speed => x * x + (2ax) * (2ax) = speed
                // => x * x + ((y / x) * x) * ((y / x) * x) = speed = x 平方 加上 ( (y / x) * x ) 平方 = speed
                // => x平方 + (y / x)平方 * x平方 = speed => x平方((y / x)平方 + 1) = speed
                // x平方 = speed / ( (y / x)平方 + 1) => x = ( speed / ( (y / x)平方 + 1) ) 的開根號
                // => x = (speed / (tangent * tangent +1) ) 開根號
                // => x = Math.sqrt( speed / (tangent * tangent +1) )

                // 每次element (移動的點) 每次移動量距離為speed
                // 在用切線公式與畢氏定理算出 移動後的 x 座標 y 座標
                // 再利用 margin 或是 translate 來進行移動
                // 直到抵達目標(目的)的 中心 x 座標
                // 為防止移動到目的後超過 中心座標位置，所以防止過界功能就是一旦過界了，就把element(移動的元素)移動到目標目的(target)的中心位置上
                startx = startx + rate * Math.sqrt(params.speed / (tangent * tangent) + 1)

                // 防超過target中心點
                if( (rate === 1 && startx > coordTarget.x) || (rate === -1 && startx < coordTarget.x)) {
                    startx = coordTarget.x
                }
                
                let x = startx , y = a * x * x + b * x
                element.style.setProperty('transform',`translate(${x}px,${y}px)`)

                if(startx !== coordTarget.x) {
                    params.progess()
                    window.requestAnimationFrame(step)
                }else {
                    isFlagMove = false
                    params.complete()
                }
            }


            window.requestAnimationFrame(step)
            isFlagMove = true

            return this
        }

        exports.init = function() {
            this.position().move()
            return this
        }
    }
    return exports
}