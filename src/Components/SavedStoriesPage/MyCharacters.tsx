import { Grid } from "@mui/material";
import MyCharacterCard from "./MyCharacterCard";

const MyCharacters = ({myCharacters}: any) => {
  return (
    <Grid container justifyContent="space-between">
      {myCharacters.map((character: any)=>(
        <Grid item xs={12} md={5.7} mb="50px">
            <MyCharacterCard
              title={character.title} 
              thumbnailImage={character.thumbnailImage} 
            />
        </Grid>
      ))}
    </Grid>
  )
}

export default MyCharacters