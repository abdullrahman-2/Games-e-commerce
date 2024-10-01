import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Rating, Stack } from "@mui/material";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";

export default function ProductSection({ apiData }) {
  const [quantity, setQuantity] = useState(1);
  const [clickedItem, setClickedItem] = useState(null);
  let temp = [];

  const [open, setOpen] = useState(false);

  const handleClickOpen = (item) => {
    setClickedItem(item);
    setQuantity(1);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCart = () => {
    if (localStorage.getItem("SelectedGame")) {
      temp = JSON.parse(localStorage.getItem("SelectedGame"));
    }

    const newItem = { ...clickedItem, quantity: quantity };
    temp.push(newItem);
    localStorage.setItem("SelectedGame", JSON.stringify(temp));

    handleClose();
  };

  return (
    <>
      {apiData.map((item) => (
        <Card
          id="cart"
          key={item.id}
          sx={{
            maxWidth: 333,
            mt: 6,
            ":hover .MuiCardMedia-root": {
              scale: "1.2",
              transition: ".3s",
              rotate: "1deg",
            },
          }}
        >
          <CardMedia
            sx={{ height: 277 }}
            image={`${item.attributes.image.data[0].attributes.url}`}
            title={item.attributes.ProductTitle}
          />
          <CardContent>
            <Stack
              mt={2}
              justifyContent={"space-between"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Typography gutterBottom variant="h6" component="div">
                {item.attributes.ProductTitle}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ ml: 3, color: "text.secondary" }}
              >
                {item.attributes.Price}$
              </Typography>
            </Stack>
            <Typography color={"text.secondary"} variant="body1">
              {item.attributes.Description}
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              onClick={() => handleClickOpen(item)}
              sx={{ textTransform: "capitalize" }}
            >
              <AddShoppingCartOutlined fontSize="small" sx={{ mr: 1 }} />
              Add to cart
            </Button>
          </CardActions>

          <Dialog
            sx={{
              ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <IconButton
              sx={{ position: "absolute", top: "0", right: 0 }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>

            <Box
              display={"flex"}
              alignItems={"center"}
              gap={2.5}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              {clickedItem && (
                <>
                  <Box sx={{ display: "flex" }}>
                    <img width={300} src={clickedItem.attributes.image.data[0].attributes.url} />
                  </Box>

                  <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                    <Typography variant="h5">{clickedItem.attributes.ProductTitle}</Typography>
                    <Typography variant="h6">Price: {clickedItem.attributes.Price}$</Typography>
                    <Typography variant="body1">{clickedItem.attributes.Description}</Typography>
                    <Stack sx={{width:"90%"}} >
                    <input
                    style={{display:"block",marginBottom:"10px" , alignSelf:"center"}}
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                    <Button onClick={handleAddToCart} variant="contained" color="primary">
                      Add {quantity} to cart
                    </Button>
                    </Stack>
                  </Box>
                </>
              )}
            </Box>
          </Dialog>
        </Card>
      ))}
    </>
  );
}