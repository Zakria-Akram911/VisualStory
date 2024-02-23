import { Box} from '@mui/material';
import "../../utility/createStoryFormStyles.css"
import React from 'react';

interface formData {
    topic : string;
    type : string;
    theme: string;
    numberOfParagraph: number
}

interface CreateStoryWithStorylineFormProps {
    formSubmitted: boolean;
    setFormSubmitted:  any, 
}

const CreateStoryWithStorylineForm : React.FC<CreateStoryWithStorylineFormProps> = ({formSubmitted, setFormSubmitted}) => {
    const [formData, setFormData] = React.useState<formData>({
        topic:"",
        type: "",
        theme:"",
        numberOfParagraph: 0
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value 
        }));
    };

    const formSubmitHandler = () =>{
        console.log(formData)
    };

    if(formSubmitted) {
        formSubmitHandler()
        setFormSubmitted(false)
    }
  return (
    <Box>
        <form onSubmit={formSubmitHandler}>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    What do you want the story to be about?
                </label>
                <textarea 
                    className="create-story-with-storyline-textarea" 
                    rows={7} 
                    style={{resize: "none"}}
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    />
            </Box>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    Story Type
                </label>
                <input 
                    type="text" 
                    className="create-story-with-storyline-inputfield"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    />
            </Box>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    Select the Theme of the Story
                </label>
                <input 
                    type="text" 
                    className="create-story-with-storyline-inputfield"
                    name="theme"
                    value={formData.theme}
                    onChange={handleChange}
                    />
            </Box>
            <Box className="create-story-with-storyline-textfield">
                <label>
                    How many paragraphs do you want in the story?
                </label>
                <input 
                    type="number" 
                    className="create-story-with-storyline-inputfield"
                    name="numberOfParagraph"
                    value={formData.numberOfParagraph <= 0 ? "" : formData.numberOfParagraph}
                    onChange={handleChange}
                    />
            </Box>
            {/* <input type="submit" /> */}
        </form>
    </Box>
  )
}

export default CreateStoryWithStorylineForm