<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="jquery.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet">
        <style>
            body{
                background-color: #246BB9;
            }
            main{
                width: 50%;
                margin: auto;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
            table{
                display: flex;
                flex-direction:column;
                justify-content: center;
                cursor: grab;
            }
            select{
                border: 2px ridge black;
                border-radius: 10px;
                cursor: grab;
                font-family: 'Yanone Kaffeesatz', sans-serif;
                font-size: 20px;
            }
            select:option{
                text-align: center;
            }
            form{
                display: flex;
                justify-content: space-evenly;
                padding: 23px 0;
                background-color: yellow;
                border-radius: 10px;
                border: 5px dashed darkblue;
            }
            #form-div{
                display: flex;
                width: 50em;
                justify-content: space-around;
            }
            #id{
                padding: 9px 10px 7px 6px;
                font-weight: bold;
                border: 4px ridge rebeccapurple;
                border-radius: 10px;
                font-family: 'Yanone Kaffeesatz', sans-serif;
                font-size: 15px;
            }
            #nom{
                padding: 9px 10px 7px 6px;
                font-weight: bold;
                border: 4px ridge #192391;
                border-radius: 10px;
                font-family: 'Yanone Kaffeesatz', sans-serif;
                font-size: 15px;
            }
            #button{
                font-family: 'Yanone Kaffeesatz', sans-serif;
                font-weight: bold;
                font-size: 19px;
                margin: 0;
                display: flex;
                padding: 0;
                padding: 5px 10px 0 10px;
            }
            tr{
                width: -webkit-fill-available;
                display: flex;
                justify-content: space-around;
            }
            thead{
                display: flex;
                justify-content: center;
                padding: 24px 0;
                background-color: #418DCB;
                border-bottom: 2px solid #8DBADE;
                color: white;
                margin-bottom: 7px;
            }
            tbody{
                display: flex;
                flex-direction: column;
                align-items: center; 
            }
            td{
                display: flex;
                flex-basis: 33.3%;
                justify-content: center;
                color: white;
            }
            th{
                display: flex;
                flex-basis: 33.3%;
                justify-content: center;
            }
            tbody>tr{
                padding: 26px 0;
                background-color: #4785C2;
                border-radius: 9px;
                margin: 4px 0;
                border: 2px solid #8DBADE;
                margin-bottom: 7px;
            }
        </style>
    </head>
    <body>
        <header></header>
        <main>
            <form action="" method="post">
                <div id="form-div">
                    <input type="text" name="id" id="id">
                    <input type="text" name="nom" id="nom">
                    <select name="type" id="type">
                        <option value="">--Choisissez le type de votre pokemon--</option>
                        <option value="Grass">Grass</option>
                        <option value="Poison">Poison</option>
                        <option value="Fire">Fire</option>
                        <option value="Flying">Flying</option>
                        <option value="Water">Water</option>
                        <option value="Bug">Bug</option>
                        <option value="Normal">Normal</option>
                        <option value="Electric">Electric</option>
                        <option value="Ground">Ground</option>
                        <option value="Fairy">Fairy</option>
                        <option value="Fighting">Fighting</option>
                        <option value="Psychic">Psychic</option>
                        <option value="Rock">Rock</option>
                        <option value="Steel">Steel</option>
                        <option value="Ice">Ice</option>
                        <option value="Ghost">Ghost</option>
                        <option value="Dragon">Dragon</option>
                    </select>
                </div>
                <input type="button" id="button" name="filtrer" value="OK">
            </form>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>type</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </main>
        <footer></footer>
    <script type="text/javascript" src="script.js"></script>
    </body>
</html>