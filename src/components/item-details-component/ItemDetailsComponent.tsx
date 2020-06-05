import React, {useState} from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles, Breadcrumbs, Link, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, List, ListItem, ListItemText, Divider, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core';
import { Redirect } from 'react-router';
import {Alert} from '@material-ui/lab';
import { Inventory } from '../../models/Inventory';
import { detailsAction } from '../../actions/item-details-actions';


export interface IItemDetailsProps{
    thisItem: Inventory
    detailsAction: ((cart: Inventory[]) => void)
}

const useStyles = makeStyles({
	registerContainer:{
		display: "flex", 
		justifyContent: "center",
		margin: 20, 
		marginTop: 40, 
		padding: 20
	},
	registerForm: {
		width: "50%"
    },
    table: {
        minWidth: 650,
    }
});

let ItemDetailsComponent = (props: IItemDetailsProps) =>{
    const classes = useStyles();
    const[quantity, setQuantity]= useState<number>(1);

	//let item = new Inventory(1, "item 1", "a meme about gamers and a wholesome relationship with their mothers that they never thought was possible", 1.00, "other", "https://project-two-meme-store-pictures.s3.us-east-2.amazonaws.com/gaming-meme/Funny-Gaming-Memes-29.jpg")
    const changeQuantity = (event: any) => {
        setQuantity(event.target.value);
    }
    
    const addToCart = () => {
        let array: Array<Inventory> = []
        for(let i = 0; i < quantity; i++) {
            array.push(props.thisItem);
        }
        props.detailsAction(array);
    }

	return (
		<div style={{padding:"2%"}}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/browse">
                    All Memes
                </Link>
                <Typography color="textPrimary">{props.thisItem.item_name}</Typography>
            </Breadcrumbs>
            <Paper style={{padding:"2%", marginTop:"1%"}}>
            <Grid container>
                <Grid item xs={5}>
                    <img src={props.thisItem.item_image} style={{maxHeight:500}}/>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <ListItem>
                            <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            {props.thisItem.item_name}
                            </Typography>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Typography>Price: </Typography>
                            <span> </span>
                            <Typography variant="h6" color="secondary">
                                {" $" + props.thisItem.cost.toFixed(2)}
                            </Typography>
                            
                        </ListItem>
                        <ListItem>
                            <Typography >Category:</Typography>
                            <Button disabled={true}>{props.thisItem.category}</Button>
                        </ListItem>
                        <ListItem>
                            <Typography >Description: </Typography>
                            <span> </span>
                            <Typography color="primary">{props.thisItem.details}</Typography>
                        </ListItem>
                        <ListItem>
                        <div style={{paddingRight:100}}>
                        <TextField
                            onChange={changeQuantity}
                            defaultValue={1}
                            id="outlined-number"
                            label="Quantity"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"   
                        />
                        </div>
                        {}

                        </ListItem>
                        <ListItem>
                        <Button variant="contained" color="secondary" onClick={addToCart}>
                        Add to Cart
                        </Button>  
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            </Paper>

        </div>
    );
}

export default ItemDetailsComponent;