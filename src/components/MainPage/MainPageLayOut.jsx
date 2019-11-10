import React from 'react'
import { Grid, Header, Container, Button,  } from 'semantic-ui-react'
import BigoGameBoard from '../BingoGameBoard'
import GameLog from '../GameLog'
import './MainPage.css'
import Alert from '../Alert'

export default function MainPageLayOut({ gameTurn, players, resetButtonClickHandler}) {
    return (
        <Container>
            <Alert/>
            <Grid id="MainPage" textAlign='center' verticalAlign='middle'>
                <Grid.Column className="content">
                    <Grid className="title">
                        <Grid.Column >
                            <Header as='h1' color='teal' textAlign='center'>
                                Bingo Game
                            </Header>
                        </Grid.Column>
                    </Grid>
                    <Grid className="content">
                        <BigoGameBoard
                            gameTurn={gameTurn}
                            player={players[0]}
                        />
                        <div className="status">
                            <div className="log">
                                <GameLog/>
                            </div>
                            <div className="buttons">
                                <Button 
                                    onClick={resetButtonClickHandler}
                                    size="massive" color="teal"
                                    >
                                    {gameTurn === -1 ? `Game Start` : `Game Reset`}
                                </Button>
                            </div>
                        </div>
                        <BigoGameBoard
                            gameTurn={gameTurn}
                            player={players[1]}
                        />
                    </Grid>
                </Grid.Column>
                
            </Grid>
        </Container>
        
    )
}
