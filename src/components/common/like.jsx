import React, { Component } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

const Like = ({ liked, handleChangeColor }) => {
  return (
    <div>
      {liked ? (
        <div onClick={handleChangeColor}>
          <IconContext.Provider value={{ className: 'heart-icon' }}>
            <AiOutlineHeart />
          </IconContext.Provider>
        </div>
      ) : (
        <div onClick={handleChangeColor}>
          <IconContext.Provider value={{ className: 'heart-icon' }}>
            <AiFillHeart />
          </IconContext.Provider>
        </div>
      )}
    </div>
  )
}

export default Like
