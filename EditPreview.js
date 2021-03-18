import { Component } from "react";

import {
	BlockControls
} from '@wordpress/block-editor';

import {
	ToolbarGroup,
	ToolbarButton,
	Dashicon
} from '@wordpress/components';

export default class EditPreview extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<BlockControls>
				<ToolbarGroup
					className={'type-select-controls'}
				>
					{ this.props.editToggle ?
						<ToolbarButton
							icon={<Dashicon icon="welcome-view-site" />}
							label="Switch to Preview"
							onClick={ () => this.props.handler(false) }
						/>
					:
						<ToolbarButton
							icon={<Dashicon icon="edit" />}
							label="Switch to Edit"
							onClick={ () => this.props.handler(true) }
						/>

					}
				</ToolbarGroup>
			</BlockControls>
		);
	}
}
