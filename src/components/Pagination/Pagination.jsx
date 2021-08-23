// Import the needed libraries. 
import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Import all the needed modules. 
import useStyles from './styles'
import { getPosts } from '../../actions/posts'


// Our pagination react component. 
const Paginate = ({ page }) => {
    const { numberOfPages } = useSelector((state) => state.posts)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        if(page) dispatch(getPosts(page))
    }, [dispatch, page])

    return(
        <Pagination 
            classes={{ ul: classes.ul }} 
            count={numberOfPages} 
            page={Number(page) || 1} 
            variant="outlined" 
            color="primary" 
            renderItem={(item) => (
                <PaginationItem { ...item } component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
    )
}

// Exporting our needed modules. 
export default Paginate