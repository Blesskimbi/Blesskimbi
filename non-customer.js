let namesArray = [localStorage.getItem("Customers_Name")]
let withdrawedArray = [localStorage.getItem("Amount_Withdrawn")]
let balanceArray = [localStorage.getItem("Account_Balance")]
let timeArray = [localStorage.getItem("Transaction_Time")]

let namesData = ""
let withdrawedData = ""
let balanceData = ""
let timeData = ""

let balanceAfter
let attemptsRemaining = 3
let isAdmin = 2024
let correctPin = 1111
let correctBio = 2222
let minAmount = 5000
let maxAmount = 300000
let removable


let customerName

let withdrawalAmount

let customerPin

let customerBio



let adminBtn = document.getElementById("admin-btn")
let recentContent = document.getElementById("recsent-content")
let adminInputEl

adminBtn.addEventListener("click", function() {

    adminInputEl = document.getElementById("admin-inputel").value

    if (adminInputEl == isAdmin) {

        adminInputEl = document.getElementById("admin-inputel").value = ""
        recentContent.style.display = "block"

    } else {

        if (recentContent.style.display != "block") {
            alert("ONLY ADMINS CAN VIEW RECENT TRANSACTIONS")

        }
    }
})


let names = document.getElementById("names")
let withdrawed = document.getElementById("withdrawed")
let balance = document.getElementById("balance")
let time = document.getElementById("time")

if (namesArray.length > 0) {
    for (let i = 0; i < namesArray.length; i++) {
        names.innerHTML += namesArray[i]
        withdrawed.innerHTML += withdrawedArray[i]
        balance.innerHTML += balanceArray[i]
        time.innerHTML += timeArray[i]
    }
}

let submitBtn = document.getElementById("submit-btn")



let warning = document.getElementById("warn-holder")
let confirmWarning = document.getElementById("confirm-warning")
let closeWarning = document.getElementById("close-warning")

let resultText1 = document.getElementById("result1-text")
let resultText2 = document.getElementById("result2-text")
let resultText3 = document.getElementById("result3-text")
let resultText4 = document.getElementById("result4-text")
let timeText = document.getElementById("time-text")

confirmWarning.addEventListener("click", function() {

    warning.style.display = "none"

})

closeWarning.addEventListener("click", function() {

    warning.style.display = "none"

})


submitBtn.addEventListener("click", function() {

    let timestamp = new Date().toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    customerName = document.getElementById("name").value
    accountBalance = document.getElementById("account-balance").value
    withdrawalAmount = document.getElementById("amount-to-withdraw").value
    customerPin = document.getElementById("customer-pin").value
    customerBio = document.getElementById("customer-bio").value

    removable = accountBalance - 5000



    if (customerName.length >= 3 && customerName != "" && accountBalance != 0 && withdrawalAmount != 0 && customerPin != "" || customerBio != "") {


        if (accountBalance != 0 && withdrawalAmount != 0) {


            if (accountBalance != 0) {

                if (withdrawalAmount != 0) {

                    if (withdrawalAmount != 0 && removable >= withdrawalAmount && withdrawalAmount >= minAmount && withdrawalAmount <= maxAmount) {

                        if (attemptsRemaining > 1 && customerPin == correctPin || customerBio == correctBio) {

                            confirmWarning.href = "index.html"

                            balanceAfter = accountBalance - withdrawalAmount

                            resultText4.textContent = ""

                            resultText1.textContent = "HELLO " + customerName + " WIDRAWAL WAS SUCCESSFUL"
                            resultText2.textContent = "NEW ACCOUNT BALANCE: " + balanceAfter
                            resultText3.textContent = " " + timestamp

                            timeText.style.display = "block"
                            warning.style.display = "block"

                            pushToRecents(timestamp)

                        } else {

                            checkIfCorrect()
                        }

                    } else {

                        resultText3.textContent = ""
                        resultText4.textContent = ""

                        resultText1.textContent = "PLEASE ENTER A VALID AMOUNT!"
                        resultText2.textContent = "LIMITS: 5000(MAX) AND 300,000(MIN)"
                        resultText4.textContent = " YOUR ACCOUNT CAN'T BE COMPLETELY EMPTIED"

                        timeText.style.display = "none"
                        warning.style.display = "block"

                    }

                } else {

                    resultText2.textContent = ""
                    resultText3.textContent = ""
                    resultText4.textContent = ""

                    resultText1.textContent = "PLEASE ENTER A VALID AMOUNT!"

                    timeText.style.display = "none"
                    warning.style.display = "block"
                }
            } else {

                resultText2.textContent = ""
                resultText3.textContent = ""
                resultText4.textContent = ""

                resultText1.textContent = "PLEASE ENTER A VALID AMOUNT!"

                timeText.style.display = "none"
                warning.style.display = "block"
            }
        } else {

            resultText2.textContent = ""
            resultText3.textContent = ""
            resultText4.textContent = ""

            resultText1.textContent = "PLEASE ENTER A VALID AMOUNT!"

            timeText.style.display = "none"
            warning.style.display = "block"

        }

    } else {

        resultText2.textContent = ""
        resultText3.textContent = ""
        resultText4.textContent = ""

        resultText1.textContent = "PLEASE FILL IN ALL THE INPUTS CORRECTLY"

        timeText.style.display = "none"
        warning.style.display = "block"
    }

})


function checkIfCorrect() {
    if (attemptsRemaining > 1) {

        attemptsRemaining--

        resultText2.textContent = ""
        resultText3.textContent = ""
        resultText4.textContent = ""

        resultText1.textContent = "INVALID CREDENTIAL YOU HAVE " + attemptsRemaining + " MORE ATTEMPS"

        timeText.style.display = "none"
        warning.style.display = "block"

    } else {

        resultText2.textContent = ""
        resultText3.textContent = ""
        resultText4.textContent = ""

        resultText1.textContent = "TOO MANY ATTEMPS YOUR CARD HAS BEEN CAPTURED"

        timeText.style.display = "none"
        warning.style.display = "block"
    }
}

function pushToRecents(timestamp) {


    namesData =
        `
        <li>${customerName}</li>

        `

    withdrawedData =
        `
        <li>${withdrawalAmount}</li>

        `

    balanceData =
        `
        <li>${balanceAfter}</li>

        `

    timeData =
        `
        <li>${timestamp}</li>

        `

    namesArray.push(namesData)
    withdrawedArray.push(withdrawedData)
    balanceArray.push(balanceData)
    timeArray.push(timeData)

    localStorage.setItem("Customers_Name", namesArray)

    localStorage.setItem("Amount_Withdrawn", withdrawedArray)

    localStorage.setItem("Account_Balance", balanceArray)

    localStorage.setItem("Transaction_Time", timeArray)

    names.innerHTML += namesArray[i]
    withdrawed.innerHTML += withdrawedArray[i]
    balance.innerHTML += balanceArray[i]
    time.innerHTML += timeArray[i]

}