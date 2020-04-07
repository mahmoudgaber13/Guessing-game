var num;
var tries;
function newGame()
{
    num= Math.floor(Math.random() * 100) + 1;
    tries=0;
    document.querySelector("#triesTxt").value=tries;
    document.querySelector("#inputTxt").focus();
    document.querySelector("#hintTxt").value="";
}
function guess()
{
    if(document.querySelector("#inputTxt").value!="")
    {
        if(document.querySelector("#inputTxt").value==num)
        {
            alert("Congratulations You Won after : "+tries+" tries");
            newGame();
        }
        else if(document.querySelector("#inputTxt").value>num)
        {
            document.querySelector("#hintTxt").value="Lower..";
            tries++;
            document.querySelector("#triesTxt").value=tries;
        }
        else 
        {
            document.querySelector("#hintTxt").value="Higher..";
            tries++;
            document.querySelector("#triesTxt").value=tries;
        }
        document.querySelector("#inputTxt").value="";
        document.querySelector("#inputTxt").focus();
    }
    else
    {
        document.querySelector("#inputTxt").focus();
    }
}
function giveUp()
{
    alert("It was so close!!! you had to enter : "+num);
    newGame();
}