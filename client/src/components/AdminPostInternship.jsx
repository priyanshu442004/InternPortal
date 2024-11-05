import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
    Calendar, Bold, Italic, Link, List, AlignLeft,
    AlignCenter, AlignRight, Image, Quote, Undo, Redo
} from 'lucide-react';

const InternshipForm = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [formData, setFormData] = useState({
        internshipTitle: '',
        category: 'Engineering Internship',
        skills: '',
        stipendOption: 'fixed', // 'fixed', 'custom', or 'unpaid'
        minimumStipend: '',
        maximumStipend: '',
        stipendFrequency: 'Monthly',
        internshipType: 'inOffice',
        city: '',
        workType: 'Full Time',
        openings: '',
        expiryDate: '',
        startDate: 'immediate',
        duration: '',
        durationUnit: 'Monthly',
        description: '',
        descriptionFormat: [] // Array to store formatting
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const Preview = () => (
        <Card className="w-full max-w-4xl mx-auto bg-white">
            <CardContent className="p-8 space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">{formData.internshipTitle || 'Internship Title'}</h1>
                    <button
                        onClick={() => setShowPreview(false)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Edit
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h2 className="font-semibold text-gray-700">Category</h2>
                        <p>{formData.category}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-700">Required Skills</h2>
                        <p>{formData.skills || 'Not specified'}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-700">Stipend</h2>
                        <p>₹{formData.minimumStipend} - ₹{formData.maximumStipend} {formData.stipendFrequency}</p>
                    </div>



                    <div>
                        <h2 className="font-semibold text-gray-700">Location</h2>
                        <p>{formData.city} - ({formData.internshipType}) - ({formData.workType})</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-700">Openings</h2>
                        <p>{formData.openings} - {formData.expiryDate} </p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-700">Start Date</h2>
                        <p>{formData.startDate}</p>
                    </div>



                    <div>
                        <h2 className="font-semibold text-gray-700">Duration</h2>
                        <p>{formData.duration} {formData.durationUnit}</p>
                    </div>

                </div>

                <div>
                    <h2 className="font-semibold text-gray-700 mb-2">Description</h2>
                    <p className="whitespace-pre-wrap">{formData.description}</p>
                </div>
            </CardContent>
        </Card>
    );
    if (showPreview) {
        return <Preview />;
    }

    // CMS Editor Toolbar Component
    const EditorToolbar = () => (
        <div className="flex items-center gap-2 p-2 border-b bg-gray-50 rounded-t-md">
            <select
                className="border rounded px-2 py-1 text-sm"
                defaultValue="paragraph"
            >
                <option value="paragraph">Paragraph</option>
                <option value="h1">Heading 1</option>
                <option value="h2">Heading 2</option>
                <option value="h3">Heading 3</option>
            </select>

            <div className="flex gap-1 border-l pl-2">
                <button type="button" className="p-1.5 hover:bg-gray-200 rounded" title="Bold">
                    <Bold size={16} />
                </button>
                <button type="button" className="p-1.5 hover:bg-gray-200 rounded" title="Italic">
                    <Italic size={16} />
                </button>
                <button type="button" className="p-1.5 hover:bg-gray-200 rounded" title="Link">
                    <Link size={16} />
                </button>
            </div>

            <div className="flex gap-1 border-l pl-2">
                <button type="button" className="p-1.5 hover:bg-gray-200 rounded" title="Bullet List">
                    <List size={16} />
                </button>
                <button type="button" className="p-1.5 hover:bg-gray-200 rounded" title="Align Left">
                    <AlignLeft size={16} />
                </button>
                <button type="button" className="p-1.5 hover:bg-gray-200 rounded" title="Align Center">
                    <AlignCenter size={16} />
                </button>
                <button type="button" className="p-1.5 hover:bg-gray-200 rounded" title="Align Right">
                    <AlignRight size={16} />
                </button>
            </div>

            <div className="flex gap-1 border-l pl-2">
                <button type="button" className="p-1.5 hover:bg-gray-200 rounded" title="Insert Image">
                    <Image size={16} />
                </button>
                <button type="button" className="p-1.5 hover:bg-gray-200 rounded" title="Quote">
                    <Quote size={16} />
                </button>
            </div>

            <div className="flex gap-1 border-l pl-2">
                <button type="button" className="p-1.5 hover:bg-gray-200 rounded" title="Undo">
                    <Undo size={16} />
                </button>
                <button type="button" className="p-1.5 hover:bg-gray-200 rounded" title="Redo">
                    <Redo size={16} />
                </button>
            </div>
        </div>


    );

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Post an Internship</h1>
            <Card className="w-full max-w-4xl mx-auto">
                <CardContent className="p-6">
                    <form className="space-y-6">

                        {/* Basic Information */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Internship Title *
                            </label>
                            <input
                                type="text"
                                name="internshipTitle"
                                value={formData.internshipTitle}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Category *
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                            >
                                <option>Engineering Internship</option>
                                <option>Marketing Internship</option>
                                <option>Design Internship</option>
                            </select>
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium mb-1">
                                Skills Required *
                            </label>
                            <input
                                type="text"
                                name="skills"
                                value={formData.skills}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* Updated Stipend Section */}
                        <div className="space-y-4">
                            <label className="block text-sm font-medium">Stipend Options</label>
                            <div className="flex gap-6">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="stipendOption"
                                        value="fixed"
                                        checked={formData.stipendOption === 'fixed'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    Fixed Stipend Range
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="stipendOption"
                                        value="custom"
                                        checked={formData.stipendOption === 'custom'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    Custom Range
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="stipendOption"
                                        value="unpaid"
                                        checked={formData.stipendOption === 'unpaid'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    Unpaid
                                </label>
                            </div>

                            {formData.stipendOption !== 'unpaid' && (
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Minimum Stipend *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                name="minimumStipend"
                                                value={formData.minimumStipend}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border rounded-md pl-6"
                                                required
                                            />
                                            <span className="absolute left-2 top-2.5">₹</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Maximum Stipend *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                name="maximumStipend"
                                                value={formData.maximumStipend}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border rounded-md pl-6"
                                                required
                                            />
                                            <span className="absolute left-2 top-2.5">₹</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Stipend Type *
                                        </label>
                                        <select
                                            name="stipendFrequency"
                                            value={formData.stipendFrequency}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border rounded-md"
                                        >
                                            <option>Monthly</option>
                                            <option>Weekly</option>
                                            <option>One-time</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Location and Schedule */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium mb-2">
                                Internship Type *
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="internshipType"
                                        value="inOffice"
                                        checked={formData.internshipType === 'inOffice'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    In Office
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="internshipType"
                                        value="remote"
                                        checked={formData.internshipType === 'remote'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    Remote
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="internshipType"
                                        value="hybrid"
                                        checked={formData.internshipType === 'hybrid'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    Hybrid
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                City *
                            </label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Part-Time/Full-Time
                            </label>
                            <select
                                name="workType"
                                value={formData.workType}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                            >
                                <option>Full Time</option>
                                <option>Part Time</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Number of openings *
                            </label>
                            <input
                                type="number"
                                name="openings"
                                value={formData.openings}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                                required
                                min="1"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium mb-1">
                                Expiry date *
                            </label>
                            <input
                                type="date"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                            <Calendar className="absolute right-3 top-9 text-gray-400" size={20} />
                        </div>




                        {/* Internship Start Date */}
                        <div className="space-y-4">
                            <label className="block text-sm font-medium">Internship Start Date</label>
                            <div className="flex gap-6">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="startDate"
                                        value="immediate"
                                        checked={formData.startDate === 'immediate'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    Immediately (within next 30 days)
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="startDate"
                                        value="later"
                                        checked={formData.startDate === 'later'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    Later
                                </label>
                            </div>

                            {formData.startDate === 'later' && (
                                <input
                                    type="date"
                                    name="specificStartDate"
                                    className="w-full p-2 border rounded-md"
                                    onChange={handleInputChange}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Duration
                            </label>
                            <input
                                type="number"
                                name="duration"
                                value={formData.duration}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Duration Unit
                            </label>
                            <select
                                name="durationUnit"
                                value={formData.durationUnit}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                            >
                                <option>Monthly</option>
                                <option>Weekly</option>
                            </select>
                        </div>



                        {/* CMS-style Description Editor old */}
                        {/* <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Internship Description <span className="text-red-500">*</span>
                            </label>
                            <div className="border rounded-md">
                                <EditorToolbar />
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="w-full p-4 min-h-[200px] border-t focus:outline-none"
                                    required
                                    placeholder="Write your internship description here..."
                                />
                            </div>
                        </div> */}




                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Internship Description <span className="text-red-600">(*Required Field)</span>
                            </label>
                            <ReactQuill
                                value={description}
                                onChange={handleChange}
                                modules={{
                                    toolbar: [
                                        ['bold', 'italic', 'underline', 'strike'],
                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                        [{ 'align': [] }],
                                        ['link', 'image'],
                                        ['blockquote', 'code-block'],
                                        ['clean']
                                    ]
                                }}
                                placeholder="Write the internship description here..."
                            />
                        </div>

                        {/* Form buttons old */}
                        {/* <div className="flex justify-between pt-4">
                            <button
                                type="button"
                                onClick={() => setShowPreview(true)}
                                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                Preview
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            >
                                Submit
                            </button>
                        </div> */}

                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={() => setShowPreview(true)}
                                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
                            >
                                Preview
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            >
                                Submit
                            </button>
                        </div>

                        <div className="mt-4 text-sm text-gray-600">
                            Have questions?{' '}
                            <a href="/help" className="text-blue-600 hover:underline">
                                Visit help center
                            </a>
                            {' '}or mail us at{' '}
                            <a href="mailto:support@docq.in" className="text-blue-600 hover:underline">
                                support@docq.in
                            </a>
                        </div>


                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default InternshipForm;