import React, { useState } from 'react'
import './input.css'

const Input = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [formData ,setFormData ] = useState({
        gender: ""
    })
    const [itData, setItdata] = useState({
        it: ''
    })
    const [red, setRed] = useState(false)
    const [red1, setRed1] = useState(false)
    const [red2, setRed2] = useState(false)
    const [text, setText] = useState('')
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')


    let token = '5516090799:AAFZWHBc4QiUBQ3pCAYFMWHycc1eK_BaPIk'
    let api_telegram = `https://api.telegram.org/bot${token}`



    const sendMessageTelegram = async () => {
        const res = await fetch(`
    ${api_telegram}/sendMessage?chat_id=1060219267&text=

   
   ИМЯ: ${username}

   НОМЕР: ${phone}

   Telegram: ${email}

   ПОЛ: ${formData.gender}

   НАПРОВЛЕНИЕ: ${itData.it}
   `)
        if (username.length === 0 || phone.length === 0 || email.length===0){
            setRed(true)
            setRed1(true)
            setRed2(true)
            setText(username)
            setText1(phone)
            setText2(email)
            setUsername('')
            setPhone('')
            setEmail('')
        }else {
            setRed(false)
            setRed1(false)
            setRed2(false)
            setText(username)
            setText1(phone)
            setText2(email)
            setUsername('')
            setPhone('')
            setEmail('')
        }

        console.log(res)
    }

    const genderClick = event =>{
        const target = event.target
        const name = target.name
        const value = target.type==="checkbox" ? target.checked : target.value

        setFormData(
            {...formData,
                [name] : value
            }
        )
    }

    const itClick = event =>{
        const target2 = event.target
        const name2 = target2.name
        const value2 = target2.type==="checkbox" ? target2.checked : target2.value

        setItdata({
            ...itData,
            [name2] : value2
        })
    }


    return (
        <div className={'black-block'}>
            <div className={'input-item'}>
                <div className={'input-item3'}>
                    <h1>Оставить заявку</h1>
                    <input  style={{background: red ? '' : '#FCC3BD'}} className={"form"} value={username} onChange={(e) => setUsername(e.target.value)} type="  text" placeholder='  Имя' />
                    <br/>
                    <br/>
                    <input  style={{background: red1 ? '' : '#FCC3BD'}}  className={"form"} value={email} onChange={(e) => setEmail(e.target.value)} type=" Telegram" placeholder=' Telegram' />
                    <br/>
                    <br/>
                    <input  style={{background: red2 ? '' : '#FCC3BD'}} className={"form"} value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name='phone' placeholder='   Телефон' />

                    <form className={'checkbox-block'}>
                        <div className={'male'}>
                            <img src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/whatsapp/326/woman-standing_1f9cd-200d-2640-fe0f.png"}/>
                            <input type='radio'
                                   value="девушка"
                                   checked={formData.gender=="девушка"}
                                   onChange={genderClick}
                                   name="gender" id="mc1"/>
                        </div>

                        <div className={'female'}>
                            <img src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/man-standing_1f9cd-200d-2642-fe0f.png"}/>
                            <input type='radio'
                                   value="парень"
                                   checked={formData.gender=="парень"}
                                   onChange={genderClick}
                                   name="gender" id="mc1"/>

                        </div>
                    </form>
                    <h4>
                        Какое направление вы хотите выбрать ?</h4>
                    <div className={'it-block'}>
                        <form>
                            <div className={"input-block2"}>
                                <input type='radio'
                                       value="Frontend"
                                       checked={itData.it=="Frontend"}
                                       onChange={itClick}
                                       name="it" id="mc1"/>
                                <p>Frontend</p>
                            </div>

                            <div className={"input-block2"}>
                                <input type='radio'
                                       value="Backend"
                                       checked={itData.it=="Backend"}
                                       onChange={itClick}
                                       name="it" id="mc1"/>

                                <p>Backend</p>
                            </div>

                            <div className={"input-block2"}>
                                <input type='radio'
                                       value="Fullstack"
                                       checked={itData.it=="Fullstack"}
                                       onChange={itClick}
                                       name="it" id="mc1"/>
                                <p>Fullstack</p>
                            </div>

                            <div className={"input-block2"}>
                                <input type='radio'
                                       value="UiUx дизайн"
                                       checked={itData.it=="UiUx дизайн"}
                                       onChange={itClick}
                                       name="it" id="mc1"/>
                                <p>UiUx дизайн у нас есть</p>
                            </div>
                        </form>
                    </div>
                    <div className={"button-form"}>
                        <button onClick={sendMessageTelegram} className='zapis'>
                            ЗАПИСАТЬСЯ
                        </button>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Input;