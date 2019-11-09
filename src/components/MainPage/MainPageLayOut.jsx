import React from 'react'
import { Grid, Header, Container ,Button } from 'semantic-ui-react'
import BigoGameBoard from '../BingoGameBoard'
import './MainPage.css'

export default function MainPageLayOut() {
    return (
        <Container>
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
                            playerId={1}
                        />
                        <div className="status">
                            <div className="log">

                            </div>
                            <div className="buttons">
                                <Button size="massive" color="facebook">
                                    Game Start
                                </Button>
                            </div>
                        </div>
                        <BigoGameBoard
                            playerId={2}
                        />
                    </Grid>
                </Grid.Column>
                
            </Grid>
        </Container>
        
    )
}
