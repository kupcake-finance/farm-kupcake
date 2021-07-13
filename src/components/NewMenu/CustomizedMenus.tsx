import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import TelegramIcon from '@material-ui/icons/Telegram'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const IconImage = styled.img`
  width: 24px;
`
const StyledButton = styled(Button)`
  background-color: transparent !important;
  box-shadow: none !important;
`

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: '#48cae4',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
        fontWeight: 500,
      },
    },
  },
}))(MenuItem)

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <StyledButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        <IconImage src="/images/common/telegram.svg" alt="Twitter" />
      </StyledButton>
      <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <a href="https://t.me/KupcakeSwap" target="_blank" rel="noreferrer">
          <StyledMenuItem>
            <ListItemIcon>
              <TelegramIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="English" />
          </StyledMenuItem>
        </a>

        <a href="https://t.me/KupcakeSwap_ann" target="_blank" rel="noreferrer">
          <StyledMenuItem>
            <ListItemIcon>
              <TelegramIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Announcements" />
          </StyledMenuItem>
        </a>
      </StyledMenu>
      <a href="https://twitter.com/KupcakeSwap" target="_blank" rel="noreferrer">
        <StyledButton aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="inherit">
          <IconImage src="/images/common/twitter.svg" alt="Twitter" />
        </StyledButton>
      </a>
    </div>
  )
}
