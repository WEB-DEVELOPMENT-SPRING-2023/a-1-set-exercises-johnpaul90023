function petrolcalculator()
{
        cost = document.getElementById("cost").value;
        liters = document.getElementById("liters").value;
        document.getElementById("result").innerHTML = cost * liters;
}