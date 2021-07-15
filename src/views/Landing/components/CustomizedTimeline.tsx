import React from 'react'
import styled from 'styled-components'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TodayIcon from '@material-ui/icons/Today'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import HotelIcon from '@material-ui/icons/Hotel'
import RepeatIcon from '@material-ui/icons/Repeat'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const StyledTimeline = styled(Timeline)`
  width: 100%;
  max-width: 800px;
`

const StyledPaper = withStyles({
  root: {
    background: '#48cae4',
    color: '#fff',
    border: '5px solid white',
    borderRadius: '20px',
    padding: '15px 20px',
    marginBottom: '20px',
    transition: 'all 0.5s ease',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.22) 0px 19px 43px',
      transform: 'translate3d(0px, -7px, 0px)',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Paper)

const StyledTypoTitle = withStyles({
  root: {
    marginBottom: '15px',
    color: '#ff629a',
    fontWeight: 600,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Typography)

const StyledLi = styled.li`
  list-style: none;
  margin: 5px 5px;
  font-size: 15px;
  font-weight: 500;
`

export default function CustomizedTimeline() {
  const classes = useStyles()

  return (
    <StyledTimeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Building phase
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <TodayIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={1} className={classes.paper}>
            <StyledTypoTitle variant="h5">Q2 2021</StyledTypoTitle>
            <Typography>
              <ul>
                <StyledLi>Product Thinking</StyledLi>
                <StyledLi>Dapp Building</StyledLi>
                <StyledLi>AMM Contracts Creation</StyledLi>
              </ul>
            </Typography>
          </StyledPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Launching period
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <TodayIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3} className={classes.paper}>
            <StyledTypoTitle variant="h5">Q3 2021</StyledTypoTitle>
            <Typography>
              <ul>
                <StyledLi>KupcakeSwap release</StyledLi>
                <StyledLi>Initial Kupcake Offer (Kustarter)</StyledLi>
                <StyledLi>Farming starts</StyledLi>
                <StyledLi>Initial Liquidity Offer opens for submissions</StyledLi>
                <StyledLi>Partnerships with other DApps</StyledLi>
                <StyledLi>Turn Swap into ZAP</StyledLi>
              </ul>
            </Typography>
          </StyledPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Product Evolution
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <TodayIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3} className={classes.paper}>
            <StyledTypoTitle variant="h5">Q4 2021</StyledTypoTitle>
            <Typography>
              <ul>
                <StyledLi>Kupcake Auto-Compounder</StyledLi>
                <StyledLi>KupGames release</StyledLi>
                <StyledLi>UI / UX redesign based on feedbacks</StyledLi>
                <StyledLi>Cross-chain bridge developpement</StyledLi>
                <StyledLi>Cross-chain bridge release</StyledLi>
                <StyledLi>Locker service</StyledLi>
              </ul>
            </Typography>
          </StyledPaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Community Driven Product
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <TodayIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper elevation={3} className={classes.paper}>
            <StyledTypoTitle variant="h5">Q1 2022</StyledTypoTitle>
            <StyledLi>You tell us!</StyledLi>
          </StyledPaper>
        </TimelineContent>
      </TimelineItem>
    </StyledTimeline>
  )
}
