<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="jquery.js"></script>
        <style>
            h1 {
                display: none;
                position: absolute;
                text-align: center;
                color: #ffffff;
                top: 635px;
                z-index: 10;
                text-shadow: 1px 1px 3px white;
                left: 266px;
                font-size: 46px;

            }
            #winart{
                display: none;
                height: 435px;
                width: 841px;
                background-color: #251515;
                opacity: 0.7;
                position: absolute;
                left: 8px;
                top: 482px;
            }

            main{
                height: 929px;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
            }

            #melangees{
                width: 801px;
                height: 403px;
                border: 10px solid #0dbb84;
                padding: 6px 10px;
            }

            #rangees{
                width: 801px;
                height: 403px;
                border: 10px solid #fd10ff;
                padding: 6px 10px;
            }

            #button{
                position: absolute;
                left: 900px;
                top: 440px;
                padding: 16px;
                border: 4px dashed pink;
                background-color: aqua;
                color: white;
                text-shadow: 1px 1px 3px black;
                font-family: 'Oxygen', sans-serif;
                font-size: 20px;
            }
            #button:hover{
                color: black;
                background-color: pink;
            }
        </style>
        <link href="https://fonts.googleapis.com/css?family=Oxygen&display=swap" rel="stylesheet">
    </head>
    <body>
        <header></header>
        <main>
            <div id="melangees">
                
            </div>
            <div id="rangees" style="display:flex">
                <img id="arc1" src="img/arc1.png" alt="arc">
                <img id="arc2" src="img/arc2.png" alt="arc">
                <img id="arc3" src="img/arc3.png" alt="arc">
                <img id="arc4" src="img/arc4.png" alt="arc">
                <img id="arc5" src="img/arc5.png" alt="arc">
                <img id="arc6" src="img/arc6.png" alt="arc">
            </div>
            
            <h1 id="win">Youpi c'est gagné</h1>
                <h1 id="lose">Vous avez perdu</h1>
            <button id="button">mélanger</button>
        </main>
        <footer>
        </footer>
    <script type="text/javascript" src="script.js"></script>
    </body>
</html>