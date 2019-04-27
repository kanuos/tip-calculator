
class UI {

    getData=()=>{
        this.amount= document.getElementById('bill').value;
        this.percentage= document.getElementById('percentage').value;
        this.people= document.getElementById('people').value;

        this.calculateResult();
    }

    displayResult(num){
        document.getElementById('result').value=num.toFixed(2);
    }

    resetFields(){
        document.getElementById('bill').value='';
        document.getElementById('percentage').value='';
        document.getElementById('people').value='';

    }

    calculateResult =()=>{
        let totalTip= this.amount*this.percentage / 100;
        this.displayResult(totalTip/this.people);
        this.resetFields();
    }
    
}

const init = new UI();

document.querySelector('#btn').addEventListener('click',(e)=>{
    e.preventDefault();    
    init.getData();
});
