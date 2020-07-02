import React from 'react'

export default function Delete(props) {
    return (
        <div id="del-box">
        <div id="del-content">
            <h5> Are you sure want to delete?</h5>
            <p>Once deleted, you will not be able to recover this imaginary file!</p>
            <div class="btn-group">
                <button id="del-cancel-btn" onClick={props.handleClose}>Cancel</button>
                <button id="del-ok-btn" onClick={props.handleDelete}>Ok</button>
            </div>
        </div>
    </div>
    )
}
