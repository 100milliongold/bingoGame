import React from 'react'
import { Button, Modal } from 'semantic-ui-react'


export default function AlertLayout({ is_show, close_alert , message }) {
    return (
        <Modal size={`mini`} open={is_show} onClose={close_alert}>
            <Modal.Content>
                <p>{message}</p>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    onClick={close_alert}
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content='확인'
                />
            </Modal.Actions>
        </Modal>
    )
}
