const btn = document.getElementById('btn');
const otpDisplay = document.getElementById('otp');
btn.addEventListener('click', function(){
        let otp = '';
        let length = 6 ;
        for(i = 0; i<length; i ++){
            otp += Math.floor(Math.random() * 10 );
            console.log(`OTP : ${otp}`)
        }
        otpDisplay.textContent = otp;
}
)