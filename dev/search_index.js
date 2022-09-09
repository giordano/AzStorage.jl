var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/#Construct-an-Azure-Container","page":"Reference","title":"Construct an Azure Container","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"AzContainer","category":"page"},{"location":"reference/#AzStorage.AzContainer","page":"Reference","title":"AzStorage.AzContainer","text":"container = AzContainer(\"containername\"; storageaccount=\"myacccount\", kwargs...)\n\ncontainer is a handle to a new or existing Azure container in the myaccount sorage account. The storage account must already exist.\n\nAdditional keyword arguments\n\nsession=AzSession(;lazy=true,scope=offline_access+openid+https://storage.azure.com/user_impersonation) user credentials (see AzSessions.jl package).\nnthreads=Sys.CPU_THREADS number of system threads that OpenMP will use to thread I/O.\nnretry=10 number of retries to the Azure service (when Azure throws a retryable error) before throwing an error.\nverbose=0 verbosity flag passed to libcurl.\n\nNotes\n\nThe container name can container \"/\"'s.  If this is the case, then the string preceding the first \"/\" will be the container name, and the string that remains will be pre-pended to the blob names.  This allows Azure to present blobs in a pseudo-directory structure.\n\n\n\n\n\n","category":"type"},{"location":"reference/#Container-methods","page":"Reference","title":"Container methods","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"containers\ncp\ndirname\nisdir\nmkpath\nreaddir\nrm(::AzContainer)","category":"page"},{"location":"reference/#AzStorage.containers","page":"Reference","title":"AzStorage.containers","text":"containers(;storageaccount=\"mystorageaccount\", session=AzSession(;lazy=true, scope=__OAUTH_SCOPE))\n\nlist all containers in a given storage account.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.Filesystem.cp","page":"Reference","title":"Base.Filesystem.cp","text":"cp(from..., to...)\n\ncopy a blob to a local file, a local file to a blob, or a blob to a blob.\n\nExamples\n\nlocal file to blob\n\ncp(\"localfile.txt\", AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob.txt\")\n\nblob to local file\n\ncp(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob.txt\", \"localfile.txt\")\n\nblob to blob\n\ncp(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob_in.txt\", AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob_out.txt\")\n\n\n\n\n\ncp(from, to)\n\ncopy a blob to a local file, a local file to a blob, or a blob to a blob.\n\nExamples\n\nlocal file to blob\n\ncp(\"localfile.txt\", open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob.txt\"))\n\nblob to local file\n\ncp(open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob.txt\"), \"localfile.txt\")\n\nblob to blob\n\ncp(open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob_in.txt\"), open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob_out.txt\"))\n\n\n\n\n\ncp(container_src, container_dst)\n\ncopy container_src::AzContainer and its blobs to container_dst::AzContainer.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.Filesystem.dirname","page":"Reference","title":"Base.Filesystem.dirname","text":"dirname(container)\n\nReturns the name of the Azure container that container::AzContainer is a handler to.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.Filesystem.isdir","page":"Reference","title":"Base.Filesystem.isdir","text":"isdir(container)\n\nReturns true if container::AzContainer exists.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.Filesystem.mkpath","page":"Reference","title":"Base.Filesystem.mkpath","text":"mkpath(container)\n\ncreate an Azure container from the handle container::AzContainer.  If the container already exists, then this is a no-op.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.Filesystem.readdir","page":"Reference","title":"Base.Filesystem.readdir","text":"readdir(container)\n\nlist of objects in a container.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.Filesystem.rm-Tuple{AzContainer}","page":"Reference","title":"Base.Filesystem.rm","text":"rm(container)\n\nremove container::AzContainer and all of its blobs.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Blob-methods","page":"Reference","title":"Blob methods","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"cp(::AbstractString, ::AzContainer, ::AbstractString)\ncp(::AbstractString, ::AzStorage.AzObject)\ndeserialize\nfilesize\nisfile\njoinpath\nopen\nread\nread!\nreaddlm\nrm(::AzContainer, ::AbstractString)\nrm(::AzStorage.AzObject)\nserialize\nwrite\nwritedlm","category":"page"},{"location":"reference/#Base.Filesystem.cp-Tuple{AbstractString, AzContainer, AbstractString}","page":"Reference","title":"Base.Filesystem.cp","text":"cp(from..., to...)\n\ncopy a blob to a local file, a local file to a blob, or a blob to a blob.\n\nExamples\n\nlocal file to blob\n\ncp(\"localfile.txt\", AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob.txt\")\n\nblob to local file\n\ncp(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob.txt\", \"localfile.txt\")\n\nblob to blob\n\ncp(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob_in.txt\", AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob_out.txt\")\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.Filesystem.cp-Tuple{AbstractString, AzStorage.AzObject}","page":"Reference","title":"Base.Filesystem.cp","text":"cp(from, to)\n\ncopy a blob to a local file, a local file to a blob, or a blob to a blob.\n\nExamples\n\nlocal file to blob\n\ncp(\"localfile.txt\", open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob.txt\"))\n\nblob to local file\n\ncp(open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob.txt\"), \"localfile.txt\")\n\nblob to blob\n\ncp(open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob_in.txt\"), open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"remoteblob_out.txt\"))\n\n\n\n\n\n","category":"method"},{"location":"reference/#Serialization.deserialize","page":"Reference","title":"Serialization.deserialize","text":"deserialize(container, \"blobname\")\n\nread and deserialize from a blob \"blobname\" in container::AzContainer.\n\nExample\n\nio = open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"foo.bin\")\nserialize(io, (rand(10),rand(20)))\na,b = deserialize(io)\n\n\n\n\n\ndeserialize(object)\n\nread and deserialize a blob object::AzObject.  See deserialize(container, \"blobname\").\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.filesize","page":"Reference","title":"Base.filesize","text":"filesize(container, \"blobname\")\n\nReturns the size of the blob \"blobname\" that is in container::AzContainer\n\n\n\n\n\nfilesize(object::AzObject)\n\nReturns the size of the blob corresponding to object::AzObject\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.Filesystem.isfile","page":"Reference","title":"Base.Filesystem.isfile","text":"isfile(container, \"blobname\")\n\nReturns true if the blob \"object\" exists in container::AzContainer.\n\n\n\n\n\nisfile(object::AzObject)\n\nReturns true if the blob corresponding to object exists.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.Filesystem.joinpath","page":"Reference","title":"Base.Filesystem.joinpath","text":"joinpath(container, blobname) -> AzObject\n\nCreate a handle to an Azure blob with the name blobname::String in the Azure storage container: container::AzContainer.\n\nExample:\n\nio = joinpath(AzContainer(\"mycontainer\"; storageaccount=\"myaccount\"), \"foo.bin\")\nwrite(io, rand(10))\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.open","page":"Reference","title":"Base.open","text":"open(container, blobname) -> AzObject\n\nCreate a handle to an Azure blob with the name blobname::String in the Azure storage container: container::AzContainer.\n\nExample:\n\nio = open(AzContainer(\"mycontainer\"; storageaccount=\"myaccount\"), \"foo.bin\")\nwrite(io, rand(10))\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.read","page":"Reference","title":"Base.read","text":"read(container, \"blobname\", String)\n\nreturns the contents of the blob \"blobname\" in container::AzContainer as a string.\n\n\n\n\n\nread(object, String)\n\nread a string from object::AzObject.\n\nExample\n\nio = open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"foo.txt\")\nread(io, String)\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.read!","page":"Reference","title":"Base.read!","text":"read!(container, \"blobname\", data; offset=0)\n\nread from the blob \"blobname\" in container::AzContainer into data::DenseArray, and where offset specifies a number of bytes in the blob to skip before reading.  This method returns data.  For example,\n\ndata = read!(AzContainer(\"foo\";storageaccount=\"bar\"), \"baz.bin\", Vector{Float32}(undef,10))\n\n\n\n\n\nread!(object, x; offset=0) -> x\n\nread data from object::AzObject into x::DenseArray, and return x.  offset is an integer that can be used to specify the first byte in the object to read. \n\nExample\n\nio = open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"foo.txt\")\nread!(io, Vector{Float64}(undef, 10))\n\n\n\n\n\n","category":"function"},{"location":"reference/#DelimitedFiles.readdlm","page":"Reference","title":"DelimitedFiles.readdlm","text":"readdlm(container, \"blobname\", args...; options...)\n\nRead the data in a delimited blob with the name blobname in container container::AzContainer\n\n\n\n\n\nreaddlm(io:AzObject, args...; options...)\n\nreturn the parsed delimited blob from the io object io::AzObject\n\nExample\n\nio = open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"foo.txt\")\ndata = readdlm(io)\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.Filesystem.rm-Tuple{AzContainer, AbstractString}","page":"Reference","title":"Base.Filesystem.rm","text":"rm(container, \"blobname\")\n\nremove the blob \"blobname\" from container::AzContainer.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.Filesystem.rm-Tuple{AzStorage.AzObject}","page":"Reference","title":"Base.Filesystem.rm","text":"rm(object::AzObject; force=false)\n\nremove the blob corresponding to object::AzObject.  Note that the force keyword argument does not change the behavior of this method.  It is included to match Julia's Base.rm method, allowing the calling code to work on both POSIX and Azure storage.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Serialization.serialize","page":"Reference","title":"Serialization.serialize","text":"serialize(container, \"blobname\", data)\n\nSerialize and write data to a blob with the name blobname in container::AzContainer.\n\nExample\n\ncontainer = AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\")\nserialize(container, \"foo.bin\", (rand(10),rand(20)))\na,b = deserialize(io)\n\n\n\n\n\nserialize(io::AzObject, data)\n\nSerialize and write data to io::AzObject.  See serialize(conainer, blobname, data).\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.write","page":"Reference","title":"Base.write","text":"write(container, \"blobname\", data::AbstractString; contenttype=\"text/plain\")\n\nWrite the string data to a blob with name blobname in container::AzContainer. Optionally, one can specify the content-type of the blob using the contenttype keyword argument. For example: content-type=\"text/plain\",content-type=\"applicaton/json\", etc..\n\n\n\n\n\nwrite(container, \"blobname\", data::StridedArray)\n\nWrite the array data to a blob with the name blobname in container::AzContainer.\n\n\n\n\n\nwrite(io::AzObject, data)\n\nwrite data to io::AzObject.\n\nExample\n\nio = open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"foo.bin\")\nwrite(io, rand(10))\nx = read!(io, zeros(10))\n\n\n\n\n\n","category":"function"},{"location":"reference/#DelimitedFiles.writedlm","page":"Reference","title":"DelimitedFiles.writedlm","text":"writedlm(container, \"blobname\", data, args...; options...)\n\nWrite the array data to a delimited blob with the name blobname in container container::AzContainer\n\n\n\n\n\nwritedlm(io:AzObject, data, args...; options...)\n\nwrite the array data to io::AzObject\n\nExample\n\nio = open(AzContainer(\"mycontainer\";storageaccount=\"mystorageaccount\"), \"foo.txt\")\nwritedlm(io, rand(10,10))\nx = readdlm(io)\n\n\n\n\n\n","category":"function"},{"location":"#AzStorage","page":"AzStorage","title":"AzStorage","text":"","category":"section"},{"location":"","page":"AzStorage","title":"AzStorage","text":"AzStorage is a Julia API for Azure storage.  AzStorage provides methods for interacting with Azure containers and blobs.  In order to obtain reasonable through-put, I/O is threaded via OpenMP.  In the case of writing, Azure block-blobs are used to help organize the threaded I/O.","category":"page"},{"location":"example/#Example","page":"Example","title":"Example","text":"","category":"section"},{"location":"example/","page":"Example","title":"Example","text":"Here we show basic usage where we 1) create a container, 2) write a blob to the container, 3) list the contents of the container, 4) read the blob that was previously created, 5) illustrate serialization, and 6) delete the container and its contents.","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"using Pkg\nPkg.add(\"AzSessions\")\nPkg.add(\"AzStorage\")\n\nusing AzSessions, AzStorage, Serialization\n\n# here we use client credentials, but auth-code-flow and device-code flow (etc.) are also available.\n# see the AzSessions.jl package for more details on authentication in Azure.\nsession = AzSession(;protocal=AzClientCredentials, client_id=\"myclientid\", client_secret=\"verysecret\", resource=\"https://storage.azure.com/\")\n\n# create a handle to an Azure container in an existing storage account\ncontainer = AzContainer(\"foo\"; storageaccount=\"mystorageaccount\", session=session)\n\n# create the container\nmkpath(container)\n\n# write a blob to the container\nwrite(container, \"myblob.bin\", rand(10))\n\n# list the blobs in the container\nreaddir(container)\n\n# read the contents of the blob\nx = read!(container, \"myblob.bin\", Vector{Float64}(undef, 10))\n\n# serialize and write structured data to the container.\n# here, we illustrate with a named tuple.\nserialize(container, \"myblob.bin\", (a=rand(10), b=rand(10)))\n\n# read and deserialze data from the container\nx = deserialize(container, \"myblob.bin\")\n\n# copy a blob to a local file\ncp(container, \"myblob.bin\", \"mylocalfile.bin\")\n\n# copy a local file to a blob\ncp(\"mylocalfile.bin\", container, \"myblob.bin\")\n\n# copy from a blob to another blob\ncp(container, \"myblob.bin\", container, \"mycopyblob.bin\")\n\n# remove the container, and its contents\nrm(container)","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"In addition, we can represent blob's, providing an API that is similar to handling POSIX files.","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"# create a handle, io,  to a blob, \"myblob.bin\", in a container, \"foo\", in storage account \"mystorageaccount\"\nio = open(AzContainer(\"foo\"; storageaccount=\"mystorageaccount\", session), \"myblob.bin\")\nio = joinpath(AzContainer(\"foo\"; storageaccount=\"mystorageaccount\", session), \"myblob.bin\") # this is equivalent to the previous line.\n\n# write to the blob\nwrite(io, rand(10))\n\n# read the blob\nx = read!(io, zeros(10))\n\n# check that the blob exists\nisfile(io)\n\n# serialize and write structured data\n# here, we illustrate with a named tuple\nserialize(io, (a=rand(10),b=rand(10)))\nx = deserialize(io)\n\nwrite(io, rand(10))\n\n# copy a blob, io, to a local file, mylocalfile.bin\ncp(io, \"mylocalfile.bin\")\n\n# copy a local file, mylocalfile.bin, to a blob, io\ncp(\"mylocalfile.bin\", io)\n\n# copy from a blob to another blob\nio2 = open(AzContainer(\"foo\"; storageaccount=\"mystorageaccount\", session), \"mycopyblob.bin\")\ncp(io, io2)\n\n# remove the blob\nrm(io)","category":"page"}]
}
