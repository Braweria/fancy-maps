module.exports = `
    <style>
        *{
            font-family: 'San Francisco', 'Segoe UI', sans-serif;
        }
        
        .break {
            flex-wrap: wrap;
        }
        
        .text-center {
            text-align: center;
        }
        
        input, button{
            margin: 0;
        }

        .row input{
            flex: 1
        }

        #loader{
            position: fixed;
            top: 0; left: 0;
            bottom: 0; right: 0;
            background: rgba(255, 255, 255, 0.7);
            z-index: 20;
        }

        .ui-loading-false #loader{
            display: none;
        }
        
        #loaderContent{
            background: #fff;
            padding: 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #1473E6;
            position: relative;
            z-index: 1;
            margin: -1rem;
        }

        #loaderContent p{
            margin: 1.3rem 0;
            font-size: 1.9rem;
            line-height: 1.3em;
        }

        #loader > img:last-child{
            position: absolute;
            left: -25%; 
            top: 2%;
            width: 150%;
        }

        h1{
            font-size: 1.25rem;
            font-weight: bold;
            color: #3F3F3F;
            margin: 0;
            letter-spacing: -0.02em;
        }
        
        h2{
            font-size: 1.18rem;
            font-weight: bold;
            color: #3F3F3F;
            margin: 0;
            letter-spacing: -0.02em;
        }

        button.block{
            width: 100%;
        }

        .button{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 24px;
        }

        .button[uxp-variant="action"]{
            width: 24px;
            border-radius: 50%;
            background: #1473E6;
        }

        .button[uxp-variant="action"] svg path{
            fill: #fff;
            width: 20px;
            height: 20px;
        }
        
        .button[uxp-variant="cta"]{
            width: 100%;
            height: 28px;
            line-height: 28px;
            font-weight: 600;
            font-size: 13px;
            background: #1473E6;
            color: #fff;
            border-radius: 14px;
            margin: 0;
        }

        .button[uxp-variant="cta"].large{
            font-size: 18px;
            font-weight: bold;
            height: 40px;
            line-height: 20px;
            border-radius: 20px;
        }

        .ui-itemSelected-true #warning,
        .ui-itemSelected-false #app{
            display: none;
        }
        
        .ui-currentScreen-customize #pickScreen,
        .ui-currentScreen-pick #customizeScreen{
            display: none;
        }

        #customizeScreenTitle{
            margin-bottom: 0.6rem;
            align-items: center;
        }
        
        #customizeScreenTitle span{
            margin-right: 0.3rem;
        }

        #customizeScreenTitle svg{
            width: 18px;
            height: 18px;
        }

        label{
            font-size: 0.85rem;
            margin-bottom: 0.4rem;
        }

        #mapPreview{
            width: 100%; 
            height: 55vw; 
            background: #ddd; 
            object-fit: cover; 
            object-position: center;
        }

        #zoomLevel{
            margin-top: 2rem;
            margin-bottom: 0.6rem;
        }

        input[type="range"]{
            width: 100%
        }

        #zoomLevels{
            margin-top: 0.5rem;
            margin-bottom: 1.5rem;
            justify-content: space-between;
        }

        #zoomLevels div{
            margin-top: -7px;
            display: inline-flex;
            flex-direction: column;
        }

        #zoomLevels div span{
            position: relative;
            height: 8px;
            width: 2px;
            background: #ddd;
            margin-left: 3px;
            margin-bottom: 4px;
            align-self: center;
        }

        #zoomLevels div:first-child span{
            margin-left: 1px;
            align-self: flex-start;
        }
        
        #zoomLevels div:last-child span{
            align-self: flex-end;
        }

        #mapTypes{
            margin-right: -0.6rem;
            margin-bottom: 2rem;
        }

        .map-type{
            position: relative;
            flex: 1;
            justify-content: center;
            background: #ddd;
            padding-bottom: 23.333%;
            margin-right: 0.6rem;
        }

        .map-type img:last-child{
            position: absolute;
            left: -25%; 
            bottom: -32px;
            width: 150%;
            opacity: 0;
        }

        .map-type img:first-child{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            z-index: 1;
            border: 3px solid transparent;
            border-radius: 3px;
        }

        .map-type:hover img:first-child{
            border: 3px solid #1473E6;
            opacity: 0.7;
        }
        
        .ui-mapType-light #mapTypeLight img,
        .ui-mapType-dark #mapTypeDark img,
        .ui-mapType-sat #mapTypeSat img{
            opacity: 1;
            border-color: #1473E6;
        }

        #applyMap{
            margin-top: 1.7rem
        }

        #applyMap h2{
            margin-bottom: 0.7rem
        }
    </style>
`;