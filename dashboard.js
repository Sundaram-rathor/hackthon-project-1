const society= document.getElementById('societies');
const apply= document.getElementById('apply');
const events= document.getElementById('Events');
const about= document.getElementById('content');
const contact= document.getElementById('contactus');

function callSociety(){
    society.style.display='block';
    apply.style.display='none';
    events.style.display='none';
    about.style.display='none';
    contact.style.display='none';
    
}
function callApply(){
    society.style.display='none';
    apply.style.display='block';
    events.style.display='none';
    about.style.display='none';
    contact.style.display='none';
    
}
function callEvent(){
    society.style.display='none';
    apply.style.display='none';
    events.style.display='block';
    about.style.display='none';
    contact.style.display='none';
    
}
function callAbout(){
    society.style.display='none';
    apply.style.display='none';
    events.style.display='none';
    about.style.display='block';
    contact.style.display='none';
    
}
function callContact(){
    society.style.display='none';
    apply.style.display='none';
    events.style.display='none';
    about.style.display='none';
    contact.style.display='block';
    
}