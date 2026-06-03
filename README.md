
## i npm install emoji-picker-react





   
jsx<EmojiPicker
  open={open}
  onEmojiClick={handleEmoji}
  theme="dark"
  width={300}
  height={400}
/>
// কোনো import লাগে না!
// কোনো install লাগে না!
// সরাসরি use করো ✅

URL.createObjectURL(file)



কোন field কেন?
whispr_users এ:

uid → Firebase Auth এর id, সব কিছুর key
username → unique নাম (@alamin style)
displayName → profile এ দেখানো নাম
avatar → Cloudinary URL, শুরুতে ""
bio → ছোট description, শুরুতে ""
blocked → block করা users এর uid list

whispr_chats এ:

members → [userA_uid, userB_uid] — কে কে এই chat এ আছে
lastMessage → chat list এ preview দেখানোর জন্য
messages[] → প্রতিটা message object, img field টা optional (image পাঠালে URL থাকবে)

whispr_usersChats এ:

এটা bridge — কোন user কোন chat এ আছে সেটা track করে
isSeen → message পড়া হয়েছে কিনা (blue tick এর মতো) 😄




arrayUnion


block checded 



src/
  pages/
    LoginPage.jsx
    RegisterPage.jsx
    HomePage.jsx
  components/
    sidebar/
      Sidebar.jsx
      ChatList.jsx
      ChatItem.jsx
    chat/
      ChatWindow.jsx
      MessageList.jsx
      MessageBubble.jsx
      MessageInput.jsx
    shared/
      Avatar.jsx
      SearchBar.jsx
      UserInfo.jsx