import inquirer from 'inquirer'


const currency:any = {
    USD: 1,//Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
  [
    {
    
        name:'from',
        message: "Enter From Currency",
        type: 'list',
        choices:['USD','EUR','GBP','INR','PKR',]
      
      },

      {
          name:'to',
        message: "Enter to Currency",
        type: 'list',
        choices:['USD','EUR','GBP','INR','PKR',]
      
      },

      {

         name: 'amount',
         message: "Enter Your Amount",
         type: 'number',

        
      }
   ]
  )


  let fromamount =currency[user_answer.from]
  let toamount =currency[user_answer.to]
  let amount =user_answer.amount
  let baseAmount =amount / fromamount
  let convertedAmount = baseAmount * toamount
console.log(convertedAmount);

  console.log(fromamount);
  console.log(toamount);
  console.log(amount);
    
      
      
    

    
    

  
    


    










