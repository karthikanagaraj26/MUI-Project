import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
  Popover,
  Snackbar,
  Alert,
  Dialog,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  gap: "10px",
});

const emojiList = ["😀", "😂", "😍", "😎", "👍", "🙏", "🔥", "❤️"];
const peopleList = ["Alice", "Bob", "Charlie", "Daisy", "Ethan"];

function Add() {
  const [open, setOpen] = useState(false);
  const [anchorElEmoji, setAnchorElEmoji] = useState(null);
  const [anchorElTag, setAnchorElTag] = useState(null);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [video, setVideo] = useState(null);
  const [taggedPeople, setTaggedPeople] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleEmojiClick = (emoji) => {
    setText((prev) => prev + emoji);
    setAnchorElEmoji(null);
  };

  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleVideoUpload = (e) => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0].name);
    }
  };

  const handleTagPerson = (name) => {
    if (!taggedPeople.includes(name)) {
      setTaggedPeople([...taggedPeople, name]);
    }
    setAnchorElTag(null);
  };

  const handlePost = () => {
    setSnackbarOpen(true);

    setTimeout(() => {
      setSnackbarOpen(false);
      setOpen(false);

      // Reset all fields
      setText("");
      setImage(null);
      setImagePreview(null);
      setVideo(null);
      setTaggedPeople([]);
      setSelectedDate(null);
    }, 1500);
  };

  return (
    <>
      <Tooltip title="Add">
        <Box
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "50%", md: 30 },
            transform: { xs: "translateX(-50%)", md: "none" },
          }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
      </Tooltip>

      <StyledModal open={open} onClose={() => setOpen(false)}>
        <Box
          width={400}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="grey" textAlign="center" mb={2}>
            Create a Post
          </Typography>

          <UserBox>
            <Avatar sx={{ bgcolor: red[500] }}>R</Avatar>
            <Typography fontWeight={500}>John Doe</Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* ✅ Show selected date */}
          {selectedDate && (
            <Typography mt={1} sx={{ fontSize: 14, color: "gray" }}>
              📅 Selected date: {selectedDate.toDateString()}
            </Typography>
          )}

          {/* ✅ Show tagged people */}
          {taggedPeople.length > 0 && (
            <Typography mt={1} sx={{ fontSize: 14, color: "gray" }}>
              👥 Tagged: {taggedPeople.join(", ")}
            </Typography>
          )}

          {imagePreview && (
            <Box mt={2}>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Box>
          )}

          <Stack direction="row" gap={1} mt={3} mb={2}>
            <EmojiEmotions
              color="primary"
              onClick={(e) => setAnchorElEmoji(e.currentTarget)}
              sx={{ cursor: "pointer" }}
            />
            <label>
              <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
              <Image color="secondary" sx={{ cursor: "pointer" }} />
            </label>
            <label>
              <input type="file" accept="video/*" hidden onChange={handleVideoUpload} />
              <VideoCameraBack color="success" sx={{ cursor: "pointer" }} />
            </label>
            <PersonAdd color="error" sx={{ cursor: "pointer" }} onClick={(e) => setAnchorElTag(e.currentTarget)} />
          </Stack>

          {/* Emoji Popover */}
          <Popover
            open={Boolean(anchorElEmoji)}
            anchorEl={anchorElEmoji}
            onClose={() => setAnchorElEmoji(null)}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", p: 1, maxWidth: 200 }}>
              {emojiList.map((emoji) => (
                <Typography
                  key={emoji}
                  sx={{ fontSize: 24, m: 0.5, cursor: "pointer", "&:hover": { transform: "scale(1.2)" } }}
                  onClick={() => handleEmojiClick(emoji)}
                >
                  {emoji}
                </Typography>
              ))}
            </Box>
          </Popover>

          {/* Tag Popover */}
          <Popover
            open={Boolean(anchorElTag)}
            anchorEl={anchorElTag}
            onClose={() => setAnchorElTag(null)}
          >
            <Box sx={{ p: 1 }}>
              {peopleList.map((person) => (
                <Typography
                  key={person}
                  sx={{ p: 0.5, cursor: "pointer", "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" } }}
                  onClick={() => handleTagPerson(person)}
                >
                  {person}
                </Typography>
              ))}
            </Box>
          </Popover>

          <ButtonGroup variant="contained" fullWidth sx={{ mt: 2 }}>
            <Button sx={{ flex: 1 }} onClick={handlePost}>Post</Button>
            <Button sx={{ width: 100 }} onClick={() => setCalendarOpen(true)}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" variant="filled">Posted successfully!</Alert>
      </Snackbar>

      <Dialog open={calendarOpen} onClose={() => setCalendarOpen(false)} fullWidth maxWidth="sm">
        <Box p={2}>
          <Typography variant="h6" mb={2}>Select a Date</Typography>
          <Calendar
            onClickDay={(value) => {
              setSelectedDate(value);
              setCalendarOpen(false);
            }}
          />
        </Box>
      </Dialog>
    </>
  );
}

export default Add;
