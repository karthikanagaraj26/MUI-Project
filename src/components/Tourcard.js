import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

function Tourcard() {
  return (
    <div>
      {/* First Card */}
      <Card sx={{ maxWidth: 600, marginTop: 10 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Rocky River"
        />
        <CardMedia
          component="img"
          height="350"
          image={require("../assets/1.jpeg")}
          alt="Rocky River"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            The Rocky River, primarily located in Cuyahoga County, Ohio, is a
            relatively short river that forms the western boundary of Cleveland
            and Lakewood, and also borders other suburbs like Fairview Park and
            Rocky River, the latter named after the river itself. It's known for
            being a top steelhead trout river and is a central feature of the
            Rocky River Reservation within the Cleveland Metroparks. The river
            also plays a role in defining boundaries between other suburbs like
            Brook Park and North Olmsted. under a cloudy, possibly stormy, sky.
            The scene evokes a sense of wilderness and natural beauty.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>

      {/* Second Card */}
      <Card sx={{ maxWidth: 600, marginTop: 10 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Taj Mahal"
        />
        <CardMedia
          component="img"
          height="400"
          image={require("../assets/2.jpeg")}
          alt="Taj  Mahal"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            The Taj Mahal, a breathtaking ivory-white marble mausoleum, is
            located in Agra, India, on the banks of the Yamuna River. It was
            commissioned in 1632 by Mughal emperor Shah Jahan as a final resting
            place for his beloved wife, Mumtaz Mahal. Considered a masterpiece
            of Indo-Islamic architecture, the Taj Mahal is renowned for its
            exquisite symmetry, intricate carvings, and the iconic dome that
            dominates the skyline.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>

      {/* third Card */}
      <Card sx={{ maxWidth: 600, marginTop: 10 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Paris Tower"
        />
        <CardMedia
          component="img"
          height="350"
          image={require("../assets/3.jpeg")}
          alt="Paris Tower"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            The Eiffel Tower, a globally recognized symbol of Paris, is a
            lattice tower made of iron and stands at a height of 330 meters
            (1,083 feet). Designed by Gustave Eiffel for the 1889 World's Fair,
            it was initially met with criticism but has since become an iconic
            landmark and a testament to French engineering prowess. The tower
            features three levels for visitors, with restaurants on the first
            two and observation decks on all three, offering panoramic views of
            Paris.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>

      {/*Fourth card*/}
      <Card sx={{ maxWidth: 600, marginTop: 10 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="INDIA Gate"
        />
        <CardMedia
          component="img"
          height="300"
          image={require("../assets/4.jpeg")}
          alt="INDIA Gate"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            India Gate is a prominent war memorial located in New Delhi, India.
            It stands as a tribute to the Indian soldiers who died in World War
            I and the Third Anglo-Afghan War. The monument, designed by Sir
            Edwin Lutyens, is a towering archway reminiscent of the Arc de
            Triomphe in Paris. It also features the names of over 13,000
            soldiers inscribed on its walls. Adjacent to the main structure is
            the Amar Jawan Jyoti, an eternal flame dedicated to unknown soldiers
            who sacrificed their lives for the nation.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>

      {/*Fifth card*/}
      <Card sx={{ maxWidth: 600, marginTop: 10 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="ISHA Statue"
        />
        <CardMedia
          component="img"
          height="270"
          image={require("../assets/5.jpeg")}
          alt="ISHA Statue"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            "Isha" is a name with diverse meanings and associations. Primarily,
            it's a Hindu name of Sanskrit origin, meaning "one who protects" or
            "ruler". It's also a name for the supreme being, often associated
            with the goddess Parvati, symbolizing purity. In Hinduism, Isha also
            refers to the God Shiva. Furthermore, Isha is the name of a
            significant Upanishad in Hindu scripture. Additionally, Isha is used
            in Islam to refer to the evening/night prayer.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <Rating name="simple-controlled" value={4} />
        </CardActions>
      </Card>
    </div>
  );
}

export default Tourcard;