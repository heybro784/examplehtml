console.warn("There's an easter egg!");
function f(h) {
 //uwaga - zmienne musza byc zadeklarowane w tym bloku kodu, w ktorym beda potem uzywane
 //kiedy zmienne text i text2 byly zadeklarowane instrukcja let wewnatrz bloku if, to nie byly widoczne
 //poza blokiem if - dlatego byl komunikat bledu zwiazany z ze zmienna "text"
 let text = "x";
 let text2 = "y";
 
 if (h == 1) {		//uwaga - w js instrukcja warunkowa "rowna sie" sa dwa znaki == a nie jeden =
   //text = "/broogli/assets/htmlmp4/1.html";		//uwaga - ta sciezka do pliku jest blednie podana
   text = "assets/htmlmp4/confused.html";					//uwaga - tak wyglada poprawnie podana sciezka
   text2 = "cursor moved out of an object";
 }
 else if (h == 2) {		//uwaga -  tutaj jest zrobione else if, zeby byla ciaglosc warunku
   //text = "/broogli/assets/htmlmp4/2.html";
   text = "assets/htmlmp4/smiling.html";					//uwaga - ta sciezka do pliku jest blednie podana
   text2 = "cursor hovered over an object";		//uwaga - tak wyglada poprawnie podana sciezka
 }
 else if (h == "3A") {		//uwaga -  tutaj jest zrobione else if, zeby byla ciaglosc warunku
   //text = "/broogli/assets/htmlmp4/3A.html";
   text = "assets/htmlmp4/3A.html";					//uwaga - ta sciezka do pliku jest blednie podana
   text2 = "3a easter egg";		//uwaga - tak wyglada poprawnie podana sciezka
 }
 else if (h == "hearts") {		//uwaga -  tutaj jest zrobione else if, zeby byla ciaglosc warunku
   //text = "/broogli/assets/htmlmp4/hearts.html";
   text = "assets/htmlmp4/hearts.html";					//uwaga - ta sciezka do pliku jest blednie podana
   text2 = "I love you!";		//uwaga - tak wyglada poprawnie podana sciezka
 }
 else {
  return "404 Not Found"
 }
 document.getElementById("mouseEvent1").src = String(text);
 text3 = String(new Date());
 list = [text3, text2];
 console.log(String(list.join()));
}


