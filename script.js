function generateRandomLetters(){
  var ltcount=parseInt(document.getElementById("letterCount").value);
  var ltlength=parseInt(document.getElementById("letterlength").value);
  var str=document.getElementById("intext").value;
  document.getElementById("outtext").value="";
  for(var i=0;i<ltcount;i++){
    var temp="";
    for(var j=0;j<ltlength;j++){
      temp+=str.charAt(Math.floor(Math.random() * str.length));
    }
    document.getElementById("outtext").value+=temp+"\n";
  }


}
function copytext() {
    // Get the text field
    var copyText = document.getElementById("outtext");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }
  function downloadFile() {
    const element = document.createElement('a');
    const content = document.getElementById('outtext').value;
  
    const blob = new Blob([content], { type: 'plain/text' });
  
    const fileUrl = URL.createObjectURL(blob);
    
    const filename="Random Generated Text.txt";
    
    element.setAttribute('href', fileUrl); 
    element.setAttribute('download', filename);
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    
    document.body.removeChild(element);
  };
  
  
 
