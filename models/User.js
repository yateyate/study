const mongoose = require('mongoose');


const userSchema = mongoose.Scgema({
    name:{
        type: String,
        maxlength: 50 //글자수 제한
    },
    email:{
        type: String,
        trim: true, //trim은 스페이스를 없애주는 역활을 핢
        unique: 1 // 똑같은 이메일은 사용 못하게핢
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{
        //role을 주는 이유 관리자전용
        type:Number,
        default: 0,
    },
    image: String,
    token:{
        type: String, //유효성 관리
    },
    tokenExp:{ //토큰을 사용 할 수 있는 기간
        type:Number
    }
})

const User = mongoose.model('User',userSchema) //이 스키마를 모델로 감싸준다

module.exports = { User }