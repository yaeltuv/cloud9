import * as React from 'react';
import Box from '@mui/material/Box';
import Button2 from "./Button2";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -40%)',
    width: 700,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    bgcolor: '#d9d9d9',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
    overflow:'scroll',
    overflowX: 'hidden',
    height:'90%'
};

export default function BasicModal({open, setOpen, query, isLoading, result, topic, images}) {
    const handleClose = () => {
        setShowPreview(false);
        setOpen(false)
    };
    const [showPreview, setShowPreview] = React.useState(false);

    const clickHandler = () => {
        setShowPreview(true);
    }
    if(!showPreview){
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        chatGPT
                    </Typography>
                    <div className="input">
                        {query}
                    </div>
                    {isLoading && <div>Loading...</div>}
                    {!isLoading &&
                        <div className="output-wrapper">
                            <div className="output">
                                {result.split('.').map((item,index) => <div key={index}>{item}</div>)}
                            </div>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                DALL-E
                            </Typography>
                            <div className ="output scroll">
                                {images.map((obj, index) => <div key={index}>{JSON.stringify(obj)}</div>)}
                            </div>
                        </div>
                    }
                    <Button2 text="Preview" clickHandler={clickHandler}/>
                </Box>


            </Modal>
        </div>
    )}
    else{
        return (<div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Ad Topic: {topic}
                    </Typography>
                    <Button2 onSide={true} text="Upload"></Button2>
                    <div><b>chatGPT</b></div>
                    <div className="output">
                        {result.split('.').map((item,index) => <div key={index}>{item}</div>)}
                    </div>
                    <div><b>DALL-E</b></div>
                    <div className="grid-container">
                        {images.map((obj, index)=> {
                            return (<div className="grid-item" key={index}>
                                <img src={obj.url} alt="img" />
                            </div>)
                        })}
                    </div>
                </Box>


            </Modal>
        </div>)
    }
}
