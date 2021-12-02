export default function findCookie(keyword){
    return document.cookie.split(keyword+"=")[1]?.split(";")[0];
}