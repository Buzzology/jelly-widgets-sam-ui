import React from "react";

export default function WidgetSkeletonLoader() {
    return (
        <div className="border border-gray-200 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="flex space-x-4">
                <div className="rounded-lg bg-slate-200 h-20 w-20"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-8 bg-slate-200 rounded col-span-2"></div>
                            <div className="h-8 bg-slate-200 rounded col-span-1"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}