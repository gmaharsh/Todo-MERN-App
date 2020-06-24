import React from 'react';

const navbar = ( props ) =>(
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand">One-Stop</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a>Task</a></li>
      <li><a>Add Task</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
);

export default navbar;