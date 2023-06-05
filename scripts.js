//Material Price
var pricePerMaterial; 
var discountPercent;
var numMaterials;
var materialTier;
var materialEnchantment;
var imageString;

//Required Info
var averageLength;
var cityName;
var materialType;
var tier;

function SetVariables() 
{
    pricePerMaterial = document.getElementById("pricePerMaterial").value;
    discountPercent = document.getElementById("discountPercent").value;
    numMaterials = document.getElementById("numMaterials").value;
    materialType = document.getElementById("materialSelection").value;
    materialType = materialType.toUpperCase();
    cityName = document.getElementById("citySelection").value;
    averageLength = document.getElementById("timeRangeSelection").value;
    materialTier = document.getElementById("materialTier").value;
    materialEnchantment = document.getElementById("materialEnchantment").value;

    console.log(materialEnchantment)

    if (materialEnchantment > 0) {
    imageString = "https://render.albiononline.com/v1/item/T" + materialTier + "_" + materialType + "_LEVEL" + materialEnchantment + "@" + materialEnchantment + ".png";
    }
    else 
    {
        imageString = "https://render.albiononline.com/v1/item/T" + materialTier + "_" + materialType + ".png";
    }
    console.log(imageString);

    document.getElementById("renderedImage").setAttribute('src', imageString);

    CalculateSalePrice();
    ToggleImage(true);

}

function CalculateSalePrice(price, discount, numMats)
{
    let totalPrice;
    let calculatedPricePerMaterial;
    let calculatedDiscountPercent;
    let saleTotalString;

    calculatedDiscountPercent = 1.0 - discountPercent;

    calculatedPricePerMaterial = pricePerMaterial * calculatedDiscountPercent;
    totalPrice = calculatedPricePerMaterial * numMaterials;

    let averagePriceString = averageLength + " average price in " + cityName + " for " + materialTier + "." + materialEnchantment + " "+ materialType.toLowerCase() + " is: " + FormatNumber(pricePerMaterial);
    let calculationString = "Tier " + materialTier + "." + materialEnchantment + " " + materialType.toLowerCase() + " at discounted rate of " + FormatNumber(calculatedDiscountPercent) + "% is: " + FormatNumber(calculatedPricePerMaterial); 
    
    if (materialEnchantment > 0) {
    saleTotalString = numMaterials + " Tier " +  materialTier + "." + materialEnchantment + " " + materialType.toLowerCase() + " at " + FormatNumber(calculatedPricePerMaterial) + " each is: " + FormatNumber(totalPrice);
    }
    else 
    {
    saleTotalString = numMaterials + " Tier " + materialTier + " " + materialType.toLowerCase() + " at " + FormatNumber(calculatedPricePerMaterial) + " each is: " + FormatNumber(totalPrice);
    }
    
    let outputString1 = averagePriceString;
    let outputString2 = calculationString;
    let outputString3 = saleTotalString; 

    console.log(averagePriceString);
    console.log(calculationString);
    console.log(saleTotalString);

    document.getElementById("Output1").innerHTML = outputString1;
    document.getElementById("Output2").innerHTML = outputString2;
    document.getElementById("Output3").innerHTML = outputString3;
    document.getElementById("Output4").innerHTML = FormatNumber(totalPrice) + " Silver";

    console.log("Total Price: " + FormatNumber(totalPrice));
}

function FormatNumber(num) 
{
    let formattedNum;
    formattedNum = parseFloat(num).toFixed(2).toLocaleString();
    formattedNum = formattedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNum;
}

function ToggleImage(bool) 
{
    if (bool == true) 
    {
        document.getElementById("memeImage").style.display = "block";
    }
    else
    {
        document.getElementById("memeImage").style.display = "none";
    }
}

