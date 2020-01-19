export default class Collapse{
    static collapse(id)
    {
        console.log('collapsing ',id)
        if(!document.getElementById(id).classList.contains('collapse-show'))
        {
            document.getElementById(id).classList.add('collapse-show');
        }
        else
        {
            document.getElementById(id).classList.remove('collapse-show');
        }
    }
}