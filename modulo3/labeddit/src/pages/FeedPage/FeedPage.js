import React, { useState } from "react";
import Header from "../../components/HeaderPage/Header";
import {
  GlobalStyle,
  Container,
  Line,
  BoxFeed,
  Container2,
  BoxPost,
  P2,
  ContainerLike,
  Title,
  Form,
} from "./styled";
import Icon from "@mui/material/Icon";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useProtectedtPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const FeedPage = () => {
  useProtectedtPage();
  const navigate = useNavigate();
  const recipes = useRequestData([], `${BASE_URL}/posts`);
  const [form, onChange, clear] = useForm({ title: "", body: "" });

  // console.log(recipes)

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
    createPost();
  };

  const createPost = () => {
    axios
      .post(`${BASE_URL}/posts`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert(res.data);
        console.log(res);
      })
      .catch((err) => {
        alert(err.response.message);
      });
  };

  const positiveVote = (id) => {
    const body = {
      direction: 1,
    };

    axios
      .post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.message);
      });
  };

  const recipePosts = recipes.map((recipe) => {
    return (
      <BoxFeed key={recipe.id}>
        <P2>Enviado por:{recipe.username}</P2>
        <Title>{recipe.body} </Title>
        <ContainerLike>
          <Button>
            <ThumbUpOffAltIcon />
          </Button>
          <p>{recipe.voteSum}</p>
          <Button onClick={() => positiveVote(recipe.id)}>
            <ThumbDownOffAltIcon />
          </Button>
          <p>{recipe.commentCount}</p>
          <Button>
            <CommentIcon />
          </Button>
        </ContainerLike>
      </BoxFeed>
    );
  });

  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <Header />

      <BoxPost>
        <Form onSubmit={onSubmitForm}>
          <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            required
            rows={2}
            defaultValue=""
            sx={{ m: 1, width: "35ch" }}
            id="post"
            label="Título do Post..."
            type="text"
            variant="outlined"
          />
          <TextField
            multiline
            name={"body"}
            value={form.body}
            onChange={onChange}
            required
            rows={4}
            defaultValue=""
            sx={{ m: 1, width: "35ch" }}
            id="post"
            label="Quero dizer ao mundo..."
            type="text"
            variant="outlined"
          />
          <Button
            type={"submit"}
            sx={{ m: 2, width: "23ch" }}
            size="small"
            variant="contained"
          >
            Postar
          </Button>
        </Form>
        <Line />
      </BoxPost>
      <Container2>{recipePosts}</Container2>
    </Container>
  );
};

export default FeedPage;
