import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import { Theme } from './AppTheme';
import { ThemeProvider } from '@emotion/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SliderMain = () => {
  const [allData, setAllData] = useState([]);
  const [userId, setUserId] = useState(0);
  const userData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((res) => {
        setAllData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelRight = () => {
    setUserId(userId + 1);
  };
  const handelleft = () => {
    if (userId === 0) {
      setUserId(allData.length - 2);
      return;
    }
    setUserId(userId - 1);
  };
  useEffect(() => {
    userData();
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <Grid container justifyContent="center">
        <Grid item xs={7}>
          <Paper elevation={5} sx={{ height: '15rem', mt: 5, p: 3 }}>
            <Typography variant="body2" align="center">
              {allData[userId]?.title}
            </Typography>
            <Grid container justifyContent="center" mt={3}>
              <ArrowBackIosIcon sx={{ ml: 3 }} onClick={handelleft} />
              <ArrowForwardIosIcon onClick={handelRight} />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SliderMain;
