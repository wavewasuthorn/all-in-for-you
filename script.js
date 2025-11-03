<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>d^=b[,7</title>
  <style>
    body {
      background-color: #FFE6F2;
      font-family: 'Helvetica', sans-serif;
      text-align: center;
      color: #1F1C4A;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    .container {
      max-width: 450px;
      background-color: #FFE6F2;
      margin: 100px auto;
      padding: 20px 30px;
      border-radius: 15px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      position: relative;
    }

    h1 {
      color: #2918C2;
      font-size: 1.5em;
    }

    p {
      text-align: left;
      line-height: 1.5;
      font-size: 1.05em;
    }

    .btn {
      background-color: #F8BBD0;
      border: none;
      color: black;
      padding: 10px 20px;
      font-size: 1em;
      margin: 8px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.2s;
      position: relative;
    }

    .btn:hover {
      background-color: #F48FB1;
    }

    #btnNo {
      position: absolute;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hai Nana 🍓</h1>
    <p>
      You asked: <em>'pwede na ba?'</em><br><br>
      Just like what &TEAM said:<br><br>
      他の誰かじゃなくて (It can't be anyone else but you)<br><br>
      Pwede na. &lt;3<br><br>
      Will you be my girlfriend?
    </p>
    <button class="btn" id="btnYes" onclick="sayYes()">Yes (:()</button>
    <button class="btn" id="btnNo" onmouseover="moveButton()">No ):)</button>
  </div>

  <script>
    function sayYes() {
      alert("I promise to treat you well <3. Also, open this link hahaha, I promise it's safe!");
      window.open("https://medium.com/@baofiz00/to-my-news-writing-rival-that-i-ended-up-falling-for-unintentionally-b590d4998e5d?postPublishedType=initial", "_blank");
    }

    function moveButton() {
      const btnNo = document.getElementById('btnNo');
      const container = document.querySelector('.container');
      const containerRect = container.getBoundingClientRect();

      // Random position inside container
      const newX = Math.random() * (containerRect.width - btnNo.offsetWidth);
      const newY = Math.random() * (containerRect.height - btnNo.offsetHeight - 50) + 50;

      btnNo.style.left = `${newX}px`;
      btnNo.style.top = `${newY}px`;
    }
  </script>
</body>
</html>
