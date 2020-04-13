const data = {users : []};
function playerCreate(username,room,id)
{
        const user = {
            username,
            room,
            id
        };
        if(playersInRoom(room).length<2)
        {
        data.users.push(user);
        console.log(user.id);
        return user;
        }
        else return false;
}

function getPlayer(id)
{
    return  data.users.find(user=> user.id===id);
}

function findSecond(room,id)
{
    return  data.users.find(user=> user.room===room&&user.id!==id);
}

function playersInRoom(room)
{
    return data.users.filter(user=>user.room===room);
}

function playerRemove(id)
{
    data.users =  data.users.filter(user=>user.id!==id);
}

module.exports = 
{
    playerCreate,
    getPlayer,
    playerRemove,
    findSecond
}