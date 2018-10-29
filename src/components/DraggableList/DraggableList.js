import React, {Component} from 'react';

import classes from './DraggableList.css';

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class List extends Component {
    state = {
        colors:['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange']
    }
 
    dragStart = (e) => {
        this.dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.dragged);
    }
    dragEnd = (e) => {
        this.dragged.style.display = 'block';
        this.dragged.parentNode.removeChild(placeholder);
        
        // update state
        var data = this.state.colors;
        var from = Number(this.dragged.dataset.id);
        var to = Number(this.over.dataset.id);
        if(from < to) to--;
        data.splice(to, 0, data.splice(from, 1)[0]);
        this.setState({colors: data});
    }

    dragOver = (e) => {
        e.preventDefault();
        this.dragged.style.display = "none";
        if(e.target.className === 'placeholder') return;
        this.over = e.target;
        e.target.parentNode.insertBefore(placeholder, e.target);
    }
	render() {
    var listItems = this.state.colors.map((item, i) => {
      return (
        <li 
          className={classes.Item}    
          data-id={i}
          key={i}
          draggable='true'
          onDragEnd={this.dragEnd}
          onDragStart={this.dragStart}>{item}</li>
      )
     });
        console.log(this.over);
		return (
			<ul className={classes.Conteiner} onDragOver={this.dragOver}>
                {listItems}
            </ul>
		);
	}
}
export default List;
