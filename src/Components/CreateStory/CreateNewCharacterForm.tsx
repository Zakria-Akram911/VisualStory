import React from "react";
import { Box} from '@mui/material';
import "../../utility/CreateStoryFormStyles.css"
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ): void => {
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
                <input 
                    type="text" 
                    className="create-story-with-storyline-inputfield"
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}

                    />
            </Box>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    Age
                </label>
                <input 
                    type="number" 
                    className="create-story-with-storyline-inputfield"
                    name="age"
                    value={formData.age <= 0 ? "" : formData.age}
                    onChange={handleChange}
                    />
            </Box>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    Skin Color
                </label>
                <input 
                    type="text" 
                    className="create-story-with-storyline-inputfield"
                    name='skinColor'
                    value={formData.skinColor}
                    onChange={handleChange}
                    />
            </Box>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    Eye colour
                </label>
                <input 
                    type="text" 
                    className="create-story-with-storyline-inputfield"
                    name="eyeColor"
                    value={formData.eyeColor}
                    onChange={handleChange}
                    />
            </Box>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    Select Region
                </label>
                <input 
                    type="text"  
                    className="create-story-with-storyline-inputfield"
                    name="selectRegion"
                    value={formData.selectRegion}
                    onChange={handleChange}
                    />
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