const urlGenerator = async file => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'heyo_preset');
  const res = await fetch(
    'https://api.cloudinary.com/v1_1/dcoqpsz6e/image/upload',
    {
      method: 'POST',
      body: formData,
    },
  );
  const data = await res.json();
  return data.secure_url;
};

export default urlGenerator;
