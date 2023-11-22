import Topic from "../../../../models/topic"


try {
    const id = req.params.id;

    // Find the document by ID
    const doc = await Topic.findById(id);

    if (!doc) {
        return res.status(404).json({ error: 'Document not found' });
    }

    // Toggle the status field
    doc.status = !doc.status;

    // Save the updated document
    await doc.save();

    return res.json({ message: 'Status toggled successfully', doc });
} catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
}
});
