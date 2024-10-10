import MovieCard from "../../../components/Movie/MovieCard";

export default function Movie() {
    return (
        <div className="text-white">
            <video src=""></video>

            <section className="flex w-full gap-6">
                <div className="h-[576px] min-w-[352px]">
                    <img
                        className="w-full h-full object-cover rounded-xl"
                        src="https://www.figma.com/file/yd2C3sKzjEyt3WFkJOagGd/image/bf4628eeb31cb04f3b8202a6ed2a936a7790d75d"
                        alt=""
                    />
                </div>
                <div className="grid">
                    <div className="flex justify-between">
                        <span className="">Silo</span>
                        <span className="button button-primary">Add to Favourite</span>
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <span>Drama</span>
                            <span>Science fiction</span>
                            <span>2023</span>
                            <span>50:38</span>
                            <span>8.5</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatem dolorem voluptate aliquam quidem cum tempora quas.
                            Natus, aperiam doloremque. Odit adipisci, nemo pariatur provident
                            eveniet nihil! Expedita dignissimos alias fugiat. Ipsum quam
                            expedita dolore assumenda? Velit rem nobis, distinctio laboriosam
                            enim ratione praesentium repudiandae accusantium. Soluta, autem?
                            Delectus veritatis enim aut at ipsam, mollitia amet, quas nemo,
                            sed ea eaque.
                        </p>
                    </div>
                    <div>
                        <ul>
                            <li>Country: United States</li>
                            <li>Genre: Drama, Science Fiction</li>
                            <li>Date Release: May 05 2023</li>
                            <li>Production: AMC Studios</li>
                            <li>
                                Cast: Tim Robbins, Rebecca Fergunson, Avi Nash, Rashida Jones,
                                David Oyewolo, Tim Robbins
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h3>Yot may also like</h3>
                <div className="grid grid-cols-4">
                    <MovieCard
                        movie={{
                            id: 2,
                            title: "2",
                            backdrop_path:
                                "https://www.figma.com/file/yd2C3sKzjEyt3WFkJOagGd/image/bf4628eeb31cb04f3b8202a6ed2a936a7790d75d",
                            release_date: "",
                            genre_ids: [],
                            overview: "",
                            poster_path: "",
                            vote_average: 2
                        }}
                    ></MovieCard>
                    <MovieCard
                        movie={{
                            id: 2,
                            title: "2",
                            backdrop_path:
                                "https://www.figma.com/file/yd2C3sKzjEyt3WFkJOagGd/image/bf4628eeb31cb04f3b8202a6ed2a936a7790d75d",
                            release_date: "",
                            genre_ids: [],
                            overview: "",
                            poster_path: "",
                            vote_average: 2
                        }}
                    ></MovieCard>
                    <MovieCard
                        movie={{
                            id: 2,
                            title: "2",
                            backdrop_path:
                                "https://www.figma.com/file/yd2C3sKzjEyt3WFkJOagGd/image/bf4628eeb31cb04f3b8202a6ed2a936a7790d75d",
                            release_date: "",
                            genre_ids: [],
                            overview: "",
                            poster_path: "",
                            vote_average: 2
                        }}
                    ></MovieCard>
                    <MovieCard
                        movie={{
                            id: 2,
                            title: "2",
                            backdrop_path:
                                "https://www.figma.com/file/yd2C3sKzjEyt3WFkJOagGd/image/bf4628eeb31cb04f3b8202a6ed2a936a7790d75d",
                            release_date: "",
                            genre_ids: [],
                            overview: "",
                            poster_path: "",
                            vote_average: 2
                        }}
                    ></MovieCard>
                </div>
            </section>

            {/* Comentarios */}
            <section className="">
                <div className="flex">
                    <div className="w-[128px] h-[128px]">
                        <img
                            className="rounded-[50%]"
                            src="https://s3-alpha-sig.figma.com/img/6e69/d77a/05085df9d96576a4befeecdef14e79a4?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APbUCDsEXVOfrLd94lkpPA6sf9tqQAJm19gAkCGCQLj-7ucgLyT183s4dbkVyunfkBMnKFnimeFx64uBbuSY7IvFQMXmAyawBqFiJDV4a3smA5L7E~csfg5Gm17DakNoxrJKLg8vdlQ6EBIY~QQZNEsCQqiGopKIibrHAc1FfyKv7QlpMsrkh9S-yGHIRengIJkwc51lwH6UKhujMhjgchBh1ZiiGMv0q4MSbmPtZPfTo3IriIBLK4jhgWDtaoD5KH9nkdSzE8S9NcmVurspVXFBs8g2oy-o9wfdJks5G2oVcagzuAsaMB5R0Q95Npz7zzg07bEoAODBQpRMmNrD~w__"
                            alt="profile"
                        />
                    </div>
                    <div className="w-full h-full">
                        <h5>James</h5>
                        <textarea
                            className="w-full h-[72px] rounded-xl"
                            name=""
                            id=""
                            placeholder="Write your comments here....."
                        ></textarea>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-[128px] h-[128px]">
                        <img
                            className="rounded-[50%]"
                            src="https://s3-alpha-sig.figma.com/img/d0cd/3adb/501c64c1b4cf766de6abb9fe8925fb5f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sz9FEQQiYlcayizm1dKcNAorMgBkDcPAks74-U06mDEuEQiQGRZH1QnWCLBiASJwuyjkuFJYrHvGVcDXlVdIMpN9egxkS5CXTXHtOai3NbMLzWNJoHaxU2sgl7CUjmmCoz~oUxtNO0uVdynmJKd2YU35CR3Zk8K3EpGVHJwR9AaSbvnt16~knT8f7I9Y7OeNLk7X69LOxe0D79xiNyBmLQrxVkEF4IdRlIrgQU6uGJ2L7Xuh7WdgDw-258nd-amhBrqnPEyIjY2PAs8rT7QnC3L4mEusg9-6o4F-aAjlkRS5cU6LTFar12OmlCI~Xxl2UwTyj4e60OJfE52YTKuIaA__"
                            alt="profile"
                        />
                    </div>
                    <div className="w-full h-full">
                        <h5>James</h5>
                        <span>12/06/2020</span>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                            aspernatur illum eius natus, explicabo sed optio expedita, illo ab
                            iusto nemo ut doloremque hic officiis dignissimos rem unde
                            voluptas maxime?
                        </p>
                        <div className="flex gap-10">
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6"
                                >
                                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                                </svg>
                                <span className="text-xs self-end">10</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                            </svg>
                            <span>Reply</span>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-[128px] h-[128px]">
                        <img
                            className="rounded-[50%]"
                            src="https://s3-alpha-sig.figma.com/img/d0cd/3adb/501c64c1b4cf766de6abb9fe8925fb5f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sz9FEQQiYlcayizm1dKcNAorMgBkDcPAks74-U06mDEuEQiQGRZH1QnWCLBiASJwuyjkuFJYrHvGVcDXlVdIMpN9egxkS5CXTXHtOai3NbMLzWNJoHaxU2sgl7CUjmmCoz~oUxtNO0uVdynmJKd2YU35CR3Zk8K3EpGVHJwR9AaSbvnt16~knT8f7I9Y7OeNLk7X69LOxe0D79xiNyBmLQrxVkEF4IdRlIrgQU6uGJ2L7Xuh7WdgDw-258nd-amhBrqnPEyIjY2PAs8rT7QnC3L4mEusg9-6o4F-aAjlkRS5cU6LTFar12OmlCI~Xxl2UwTyj4e60OJfE52YTKuIaA__"
                            alt="profile"
                        />
                    </div>
                    <div className="w-full h-full">
                        <h5>James</h5>
                        <span>12/06/2020</span>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                            aspernatur illum eius natus, explicabo sed optio expedita, illo ab
                            iusto nemo ut doloremque hic officiis dignissimos rem unde
                            voluptas maxime?
                        </p>
                        <div className="flex gap-10">
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6"
                                >
                                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                                </svg>
                                <span className="text-xs self-end">10</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                            </svg>
                            <span>Reply</span>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-[128px] h-[128px]">
                        <img
                            className="rounded-[50%]"
                            src="https://s3-alpha-sig.figma.com/img/d0cd/3adb/501c64c1b4cf766de6abb9fe8925fb5f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sz9FEQQiYlcayizm1dKcNAorMgBkDcPAks74-U06mDEuEQiQGRZH1QnWCLBiASJwuyjkuFJYrHvGVcDXlVdIMpN9egxkS5CXTXHtOai3NbMLzWNJoHaxU2sgl7CUjmmCoz~oUxtNO0uVdynmJKd2YU35CR3Zk8K3EpGVHJwR9AaSbvnt16~knT8f7I9Y7OeNLk7X69LOxe0D79xiNyBmLQrxVkEF4IdRlIrgQU6uGJ2L7Xuh7WdgDw-258nd-amhBrqnPEyIjY2PAs8rT7QnC3L4mEusg9-6o4F-aAjlkRS5cU6LTFar12OmlCI~Xxl2UwTyj4e60OJfE52YTKuIaA__"
                            alt="profile"
                        />
                    </div>
                    <div className="w-full h-full">
                        <h5>James</h5>
                        <span>12/06/2020</span>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                            aspernatur illum eius natus, explicabo sed optio expedita, illo ab
                            iusto nemo ut doloremque hic officiis dignissimos rem unde
                            voluptas maxime?
                        </p>
                        <div className="flex gap-10">
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6"
                                >
                                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                                </svg>
                                <span className="text-xs self-end">10</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                            </svg>
                            <span>Reply</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}