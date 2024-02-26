import React from "react";
import { Box} from '@mui/material';
import "../../utility/createStoryFormStyles.css"
// import CustomizeButton from "../CustomizeButton";

interface formData {
    gender: string;
    age: number;
    skinColor: string;
    eyeColor: string;
    selectRegion: string;
    checked: boolean
}

interface CreateNewCharacterFormProps {
    formSubmitted: boolean,
    setFormSubmitted:  (value:boolean) => void, 
}
const CreateNewCharacterForm : React.FC<CreateNewCharacterFormProps> = ({formSubmitted, setFormSubmitted}) => {
    const [formData,  setFormData] = React.useState<formData>({
        gender:"",
        age: 0,
        skinColor: "",
        eyeColor : "",
        selectRegion: "",
        checked: false
    })

    const handleChange = (e: any): void => {
        const {name, value, type} = e.target
        if(type == 'checkbox'){
            setFormData(prevState => ({
                ...prevState,
                [name]: e.target.checked
            }));
        } else{
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const onFormSubmitHandler = ()=> {
        console.log(formData);
    };


    if(formSubmitted){
        if(formData.gender && formData.age && formData.eyeColor && formData.selectRegion && formData.eyeColor){
            onFormSubmitHandler()
            setFormSubmitted(false)
        }
    }
  return (
    <Box>
        <form onSubmit={onFormSubmitHandler}>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    Gender for the character
                </label>
                <select  
                    className="create-story-with-storyline-inputfield"
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}
                    >
                        <option selected disabled></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="rather-not-say">Rather not say</option>
                    </select>
            </Box>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    Age
                </label>
                <select 
                    className="create-story-with-storyline-inputfield"
                    name="age"
                    value={formData.age <= 0 ? "" : formData.age}
                    onChange={handleChange}
                    >
                        <option selected disabled></option>
                        <option value="1-10">Between 1-10 years</option>
                        <option value="11-20">Between 11-20 years</option>
                        <option value="21-30">Between 21-30 years</option>
                        <option value="31-40">Between 31-40 years</option>
                        <option value="41-50">Between 41-50 years</option>
                        <option value="50+">50+ years</option>
                    </select>
            </Box>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    Skin Color
                </label>
                <select
                    className="create-story-with-storyline-inputfield"
                    name='skinColor'
                    value={formData.skinColor}
                    onChange={handleChange}
                    > 
                        <option selected disabled></option>
                        <option value="white">White</option>
                        <option value="brown">Brown</option>
                        <option value="dark-brown">Dark Brown</option>
                        <option value="beige">Beige</option>
                        <option value="honey">Honey</option>
                        <option value="umber">Umber</option>
                        <option value="golden">Golden</option>
                        <option value="rather-not-say">Rather not say</option>
                </select>
            </Box>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    Eye colour
                </label>
                <select 
                    className="create-story-with-storyline-inputfield"
                    name="eyeColor"
                    value={formData.eyeColor}
                    onChange={handleChange}
                    >
                        <option selected disabled></option>
                        <option value="black">Black</option>
                        <option value="brown">Brown</option>
                        <option value="dark-brown">Dark Brown</option>
                        <option value="beige">Beige</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="golden">Golden</option>
                    </select>
            </Box>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    Select Region
                </label>
                <select   
                    className="create-story-with-storyline-inputfield"
                    name="selectRegion"
                    value={formData.selectRegion}
                    onChange={handleChange}
                    >
                        <option selected disabled></option>
                        <option value="american">American</option>
                        <option value="european">European</option>
                        <option value="asian">Asian</option>
                        <option value="austrailian">Austrailian</option>
                    </select>
            </Box>
            <Box className="create-story-with-storyline-textfield" sx={{display:"flex", gap:"10px", alignItems:"center",}}>
                <input 
                    type="checkbox" 
                    className="create-story-with-storyline-inputfield" 
                    style={{
                        width:"20px", 
                        height:"20px", 
                        accentColor:"transparent", 
                        margin:"0"}} 
                    name="checked"
                    checked={formData.checked}
                    onChange={handleChange}
                    />
                <label >
                Would you like to save your character? (This allows you to use your characters in future stories)
                </label>
            </Box>
            {/* <button type="submit">submit</button> */}
        </form>
    </Box>
  )
}

export default CreateNewCharacterForm