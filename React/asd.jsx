function formatName(el) {
    return el.firstName + ' ' + el.lastName;
}

const users = [
    {
        id: '1',
        Name: 'Harper Perez',
        Caption: 'EN'
    },
    {
        id: '2',
        Name: 'Nikita Gukov',
        Caption: 'BY'
    },
    {
        id: '3',
        Name: 'Ivan Petrov',
        Caption: 'RUS'
    }
];


const user = {
    firstName: 'Nikita',
    lastName: 'Gukov'
};
const main = React.createClass({
    getInitialState: function () {
        return {
            searchUsers: users
        };
    },
    search: function (event) {
        const val = event.target.value.toLowerCase();
        const searchUsers = users.filter(function (el) {
            const searchVal = el.Name.toLowerCase();
            return searchVal.indexOf(val) !== -1;
        });
        this.setState({
            searchUsers:searchUsers
            })
    },
    render: function () {
        return (
            <div>
                <input type="text" onChange={this.search}/>
                <h1> Hello, {formatName(user)}!</h1>
                <ul>
                    {
                        this.searchUsers.state.map(function (users) {
                            return <li key={users.id}>{users.Name} <br/> {users.Caption} </li>

                        })
                    }

                </ul>
            </div>

        );
    }

});


ReactDOM.render(
    <main />,
    document.getElementById('root')
);