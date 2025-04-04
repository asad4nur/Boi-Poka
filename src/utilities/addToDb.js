import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, 'Already Exist');
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
        toast('This Book Marked As Read')
    }
}

const getStoredWishList = () => {
    const storedWishList = localStorage.getItem('wish-list')
    if (storedWishList) {
        const storedList = JSON.parse(storedWishList);
        return storedList;
    }
    else {
        [];
    }
}

const addStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        console.log(id, 'Already Exist');
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr)
        toast('This Book Added to WishList')
    }
}

export { addToStoredReadList, addStoredWishList, getStoredReadList };