<div class="col-12 col-sm-6 col-md-4 mb-4">
    <div class="h-100 card">
        <div class="card-header h-100 border-bottom-0">
            <div class="d-flex align-items-top">
                <div class="mr-2">
                    @if($link->is_private)
                        <i class="fas fa-lock text-muted mr-1" title="@lang('link.private')"></i>
                    @endif
                    {!! $link->getIcon('mr-1') !!}
                    <a href="{{ $link->url }}" {!! linkTarget() !!}>
                        {{ $link->shortTitle() }}
                    </a>
                    <div class="mt-2 small text-muted">{{ $link->shortUrl() }}</div>
                </div>
            </div>
        </div>

        <div class="card-footer">
            <div>
                <small class="text-muted">
                    @lang('linkace.added') {!! $link->addedAt() !!}
                </small>
            </div>

            <div class="btn-group w-100 mt-2 small">
                <a href="{{ route('links.show', [$link->id]) }}" class="card-link" title="@lang('link.show')">
                    <i class="fas fa-info fa-fw"></i>
                </a>

                <a href="{{ route('links.edit', [$link->id]) }}" class="card-link" title="@lang('link.edit')">
                    <i class="fas fa-edit fa-fw"></i>
                </a>

                <a href="#" title="@lang('link.delete')" class="card-link"
                    onclick="event.preventDefault();document.getElementById('link-delete-{{ $link->id }}').submit();">
                    <i class="fas fa-trash-alt fa-fw"></i>
                </a>
            </div>

            <form id="link-delete-{{ $link->id }}" method="POST" style="display: none;"
                action="{{ route('links.destroy', [$link->id]) }}">
                @method('DELETE')
                @csrf
                <input type="hidden" name="link_id" value="{{ $link->id }}">
            </form>
        </div>
    </div>

</div>
