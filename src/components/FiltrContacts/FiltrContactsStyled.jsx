.list {
  margin-top: 50px;
  padding: 0;
}

.item {
  display: flex;
  align-items: center;

  width: 320px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 20px;

  background-color: #e3f6f6f7;

  cursor: pointer;
  box-shadow: 3px 3px 10px 3px rgb(75 75 75 / 30%);
	border: 2px solid #e4e1e1;
  border-radius: 4px;

  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.item:hover,
.item:focus {
  transform: scale(1.1);
}

.item:not(:last-child) {
  margin-bottom: 15px;
}

.item span {
  display: block;

  width: 20px;
  height: 20px;
  margin-right: 15px;

  border-radius: 50%;
}

.isOnline {
  background-color: #008000;
}

.isOffline {
  background-color: #ff0000;
}

.avatar {
  width: 70px;
  height: 70px;
  margin-right: 20px;
}

.name {
  font-family: 'Georgia', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.2em;

  color: #000;
}